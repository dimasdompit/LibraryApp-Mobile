import React, {Component} from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native';
import {withNavigation} from '@react-navigation/compat'

import BookBanner from '../../../components/molecules/BookBanner';

import {styles} from '../../../containers/screens/Home/styles';

class BookRecomended extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={styles.textRecent}>Recomended</Text>
        <ScrollView horizontal={true} style={styles.bookList}>
          {this.props.books.map((book) => {
            return (
              <BookBanner
                key={book.id}
                image={book.image}
                style={styles.bannerImage}
                onPress={() =>
                  this.props.navigation.navigate('Details', {id: book.id})
                }
              />
            );
          })}
        </ScrollView>
      </>
    );
  }
}

export default withNavigation(BookRecomended);
