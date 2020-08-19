import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-community/picker';

import {connect} from 'react-redux';
import {getAllBooks} from '../../../redux/actions/books';

// Components
import BookSearch from '../../organism/BookSearch';
import BookRecomended from '../../organism/BookRecomended';
import ItemCategories from '../../../components/molecules/ItemCategories';
import BookList from '../../organism/BookList';

import {styles} from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books.data.result || 'Not Found',
      search: '',
      sortBy: '',
      sortType: '',
      page: 1,
    };
  }

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = async (search, sortBy, sortType, page) => {
    const token = this.props.auth.data.token;
    await this.props
      .getAllBooks(token, search, sortBy, sortType, page)
      .then((response) => {
        this.setState((prevState, nextState) => ({
          books:
            page === 1
              ? Array.from(this.props.books.data.result)
              : [...this.state.books, ...this.props.books.data.result],
        }));
      })
      .catch((error) => {
        console.log(error.response);
        // if (error.response.data.data === 'Token Expired!') {
        // this.props.auth.isLoggedIn === false;
        // this.props.navigation.navigate('Login');
        // }
      });
  };

  updateSearch = () => {
    this.getAllBooks(this.state.search)
      .then((response) => {
        this.setState({
          books: response.value.data.data.result,
        });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <ScrollView>
          <View style={styles.homeScreen}>
            {/* =========== TOP CONTENT =========== */}
            <View style={styles.topContent}>
              {/* ==== SEARCH BOOK BAR ==== */}
              <BookSearch
                value={this.state.search}
                onChangeText={(search) => this.setState({search: search})}
                onBlur={() => {
                  this.updateSearch();
                }}
              />
              {/* ==== BANNER SLIDER ==== */}
              {/* <BookRecomended books={this.state.books} /> */}
            </View>
            {/* =========== END OF TOP CONTENT =========== */}

            {/* =========== MAIN CONTENT =========== */}
            <View style={styles.mainContent}>
              {/* ===== CATEGORIES ===== */}
              <View style={styles.categories}>
                <Text style={styles.textCategories}>Filtered by :</Text>
                <View style={styles.itemsSort}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.sortBy}
                    onValueChange={async (value) => {
                      await this.setState({sortBy: value});
                      this.getAllBooks(
                        this.state.search,
                        this.state.sortBy,
                      ).then(() => {
                        this.setState({
                          books: this.props.books.data.result,
                        });
                      });
                    }}>
                    <Picker.Item label="-- All Categories --" value="" />
                    <Picker.Item label="Title" value="title" />
                    <Picker.Item label="Author" value="author" />
                    <Picker.Item label="Genre" value="genre" />
                    <Picker.Item label="Status" value="status" />
                  </Picker>
                </View>

                <View style={styles.itemsOrder}>
                  <Picker
                    mode="dropdown"
                    selectedValue={this.state.sortType}
                    onValueChange={async (value) => {
                      await this.setState({sortType: value});
                      this.getAllBooks(
                        this.state.search,
                        this.state.sortBy,
                        this.state.sortType,
                      ).then(() => {
                        this.setState({
                          books: this.props.books.data.result,
                        });
                      });
                    }}>
                    <Picker.Item label="-- All Times --" value="" />
                    <Picker.Item label="A - Z" value="ASC" />
                    <Picker.Item label="Z - A" value="DESC" />
                  </Picker>
                </View>
              </View>

              {/* ===== SHOW ALL BOOKS ===== */}
              <View style={styles.allBooks}>
                {this.state.books ? (
                  <BookList books={this.state.books} />
                ) : (
                  <View>
                    <Text>Not Found</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
});

const mapDispatchToProps = {getAllBooks};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
