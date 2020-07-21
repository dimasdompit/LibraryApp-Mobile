import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'react-native-elements';

export class DetailSuccess extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingHorizontal: 30}}>
        <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
          <Icon
            name="check-circle"
            type="font-awesome"
            color="green"
            iconStyle={{fontSize: 150}}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              textAlign: 'center',
              paddingBottom: 20,
              color: '#131212',
            }}>
            You have successfully borrow, happy reading!
          </Text>
          <Button
            containerStyle={{borderRadius: 20}}
            title="Back to home"
            loading={this.props.isLoading}
            onPress={() => this.props.navigation.navigate('Home')}
            buttonStyle={{backgroundColor: '#f9c12d'}}
          />
        </View>
      </View>
    );
  }
}

export default DetailSuccess;
