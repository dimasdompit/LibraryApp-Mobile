import React, {Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Card, Button} from 'react-native-elements';

import {styles} from '../../screens/Profile/styles';

export class HistoryBorrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Card style={{flex: 1}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#838388',
              alignSelf: 'flex-end',
              marginBottom: 15,
            }}>
            Borrowed Date: {this.props.date}
          </Text>
          <Text>Username: {this.props.users}</Text>
          <Text>Borrowed Books: {this.props.book}</Text>
          {this.props.status === 'borrow' ? (
            <Button title="Return" onPress={() => alert('Button Return')} />
          ) : (
            <Text>Returned</Text>
          )}
        </Card>
      </View>
    );
  }
}

export default HistoryBorrow;
