import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

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
    };
  }

  getAllBooks = async (search, sort, page) => {
    const token = this.props.auth.data.token;
    await this.props
      .getAllBooks(token, search, sort, page)
      .then((response) => {
        this.setState({
          books: response.value.data.data.result,
        });
      })
      .catch((error) => {
        console.log(error.response);
        // if (error.response.data.data === 'Token Expired!') {
        // this.props.auth.isLoggedIn === false;
        // this.props.navigation.navigate('Login');
        // }
      });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  updateSearch = () => {
    this.getAllBooks(this.state.search)
      .then(() => {
        this.setState({
          books: this.props.books.data.result,
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
                <Text style={styles.textCategories}>Categories</Text>
                <View style={styles.itemsContainer}>
                  <ItemCategories
                    name="Title"
                    icon="heading"
                    color="#C6A0FC"
                    onPress={() => alert('item categories')}
                  />
                  <ItemCategories
                    name="Author"
                    icon="at"
                    color="#89CFF9"
                    onPress={() => alert('item categories')}
                  />
                  <ItemCategories
                    name="Genre"
                    color="#B3DF58"
                    icon="genderless"
                    onPress={() => alert('item categories')}
                  />
                </View>
              </View>

              {/* ===== SHOW ALL BOOKS ===== */}
              <View style={styles.allBooks}>
                {this.state.books !== 'Not Found' ? (
                  this.state.books ? (
                    <BookList books={this.state.books} />
                  ) : null
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
