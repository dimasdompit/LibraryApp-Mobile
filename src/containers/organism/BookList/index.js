import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {styles} from '../../../containers/screens/Home/styles';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={styles.headingAllBooks}>Book List</Text>
        {this.props.books.map((book) => {
          return (
            <TouchableOpacity
              key={book.id}
              onPress={() => alert(`Book ID = ${book.id}`)}>
              <Card containerStyle={styles.cardAllBooks}>
                <View style={styles.bookCards}>
                  <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={{
                      uri: `http://192.168.43.85:3000/images/${book.image}`,
                    }}
                  />
                  <View style={styles.cardsTextContainer}>
                    <Text style={styles.cardTitle}>{book.title}</Text>
                    <Text style={styles.cardAuthor}>{book.author}</Text>
                    <Text style={styles.cardDescription}>
                      {`${book.description.substring(0, 100)}...`}
                    </Text>
                  </View>
                </View>
              </Card>
            </TouchableOpacity>
          );
        })}
      </>
    );
  }
}

export default BookList;
