import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from '../../screens/Profile/styles';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.profileContainer}>
        <Button
          icon={<Icon name="power-off" size={20} color="red" />}
          title="Sign Out"
          type="clear"
          containerStyle={{flex: 1, left: 140, top: -40}}
          titleStyle={{marginLeft: 5, color: 'white'}}
          onPress={this.props.onPress}
        />
        <Avatar
          size="xlarge"
          source={this.props.image}
          rounded
          // title={this.props.username.substring(0, 1)}
          titleStyle={{textTransform: 'uppercase'}}
          activeOpacity={0.7}
        />
        <Text style={styles.username}>{this.props.username}</Text>
        <View style={styles.center}>
          <Text style={styles.role}>{this.props.role}</Text>
        </View>
      </View>
    );
  }
}

export default UserProfile;
