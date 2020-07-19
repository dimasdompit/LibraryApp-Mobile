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
        <Card>
          <Text>Username: {this.props.users}</Text>
          <Text>Book: {this.props.book}</Text>
          <Text>Date: {this.props.date}</Text>
          {this.props.status === 'borrow' ? (
            <Button title="Return" onPress={() => alert('Button Return')} />
          ) : (
            <Text>Returned</Text>
          )}
        </Card>
        {/* <FlatList
          data={this.state.history}
          renderItem={({users, book, created_at}) => (
            <Card>
              <Text>{`${users}`}</Text>
              <Text>{`${book}`}</Text>
              <Text>{`${created_at}`}</Text>
              {history.history_status === 'borrow' ? (
                <Button title="Return" />
              ) : (
                <Text>Returned</Text>
              )}
            </Card>
          )}
          keyExtractor={(history) => history.history_id}
        /> */}
      </View>
    );
  }
}

export default HistoryBorrow;
