import React, {Component} from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from '@react-navigation/compat';
// import {REACT_API_URL} from '@env';
import {config} from '../../../config/baseUrl';

import {styles} from '../../../containers/screens/Home/styles';

class BookList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Text style={styles.headingAllBooks}>Book List</Text>

        {this.props.books.map((book, i) => {
          return (
            <TouchableOpacity
              key={book.id}
              onPress={() =>
                this.props.navigation.navigate('Details', {id: book.id})
              }>
              <Card containerStyle={styles.cardAllBooks}>
                <View style={styles.bookCards}>
                  <Image
                    style={styles.cardImage}
                    resizeMode="cover"
                    source={{
                      uri: `${config.api_url}/images/${book.image}`,
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

export default withNavigation(BookList);
