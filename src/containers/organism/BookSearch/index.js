import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';

class BookSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SearchBar
        placeholder="Search book here..."
        onChangeText={this.props.onChangeText}
        onBlur={this.props.onBlur}
        value={this.props.value}
        round
        lightTheme
        inputContainerStyle={{
          backgroundColor: '#eee',
          shadowColor: '#FDD978',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        containerStyle={{
          backgroundColor: '#f9f9f9',
          borderBottomColor: '#f9f9f9',
          borderTopColor: '#f9f9f9',
          marginTop: 20,
          paddingHorizontal: 20,
        }}
      />
    );
  }
}

export default BookSearch;
