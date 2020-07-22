import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../../../containers/screens/Home/styles';
import {REACT_API_URL} from '@env';

export class BookBanner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.bookShadow}>
        <View>
          <Image
            source={{
              uri: `${REACT_API_URL}/images/${this.props.image}`,
            }}
            style={this.props.style}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default BookBanner;
