import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

export class DetailSuccess extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Text style={{fontSize: 24}}>
            You have successfully borrow, happy reading!
          </Text>
          <Button
            title="Back to home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

export default DetailSuccess;
