import React, {Component} from 'react';
import {Text} from 'react-native';
import {ScrollView} from 'react-native';

import BookBanner from '../../../components/molecules/BookBanner';

import {styles} from '../../../containers/screens/Home/styles';

class BookRecomended extends Component {
  constructor(props) {
    super();
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
                onPress={this.props.onPress}
              />
            );
          })}
        </ScrollView>
      </>
    );
  }
}

export default BookRecomended;
