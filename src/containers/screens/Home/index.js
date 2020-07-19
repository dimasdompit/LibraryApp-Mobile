import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

import axios from 'axios';
import {connect} from 'react-redux';

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
      books: [],
      search: '',
    };
  }

  getAllBooks = () => {
    const token = this.props.auth.data.token;
    axios({
      method: 'GET',
      url: 'http://192.168.43.85:3000/books',
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          books: response.data.data.result,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    const {search} = this.state;
    return (
      <>
        <ScrollView>
          <View style={styles.homeScreen}>
            {/* =========== TOP CONTENT =========== */}
            <View style={styles.topContent}>
              {/* ==== SEARCH BOOK BAR ==== */}
              <BookSearch value={search} onChangeText={this.updateSearch} />
              {/* ==== BANNER SLIDER ==== */}
              <BookRecomended
                books={this.state.books}
                onPress={() => this.props.navigation.navigate('Details')}
              />
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
                <BookList books={this.state.books} />
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
});

export default connect(mapStateToProps)(Home);
