import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {REACT_API_URL} from '@env';

import {connect} from 'react-redux';

class ManageBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books.data.result,
    };
  }
  render() {
    return (
      <ScrollView style={{flex: 1, padding: 20}}>
        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Books</Text>
        <Button
          buttonStyle={{
            width: 150,
            justifyContent: 'center',
            marginVertical: 20,
          }}
          titleStyle={{
            fontWeight: 'bold',
          }}
          title="Add Books"
          icon={
            <Icon
              name="plus"
              size={15}
              color="white"
              style={{alignSelf: 'center', marginRight: 10}}
            />
          }
          onPress={() => this.props.navigation.navigate('AddBooks')}
        />
        <View style={{marginBottom: 60}}>
          {this.props.books.data.result.map((book) => {
            return (
              <Card
                key={book.id}
                containerStyle={{flex: 1, paddingVertical: 20}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <Image
                    source={{uri: `${REACT_API_URL}/images/${book.image}`}}
                    style={{
                      height: 150,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                      marginLeft: 10,
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{
                        flexWrap: 'wrap',
                        fontSize: 18,
                        fontWeight: 'bold',
                      }}>
                      {book.title}
                    </Text>
                    <Text>Book ID: #{book.id}</Text>
                    <Text>Author: {book.author}</Text>
                    <Text>Genre: {book.genre}</Text>
                    <Text>Status: {book.status}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 20,
                  }}>
                  <Button
                    title="Edit"
                    containerStyle={{
                      flex: 1,
                      paddingRight: 10,
                    }}
                    buttonStyle={{
                      backgroundColor: '#f9c12d',
                    }}
                    onPress={() => alert('edit')}
                  />
                  <Button
                    title="Delete"
                    containerStyle={{flex: 1}}
                    buttonStyle={{
                      backgroundColor: 'red',
                    }}
                    onPress={() => alert('delete')}
                  />
                </View>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
  genres: state.genres,
});

export default connect(mapStateToProps)(ManageBooks);
