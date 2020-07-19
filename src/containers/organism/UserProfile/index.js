import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

import {styles} from '../../screens/Profile/styles';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.profileContainer}>
        <Avatar
          size="xlarge"
          source={this.props.image}
          rounded
          title={this.props.username.substring(0, 1)}
          titleStyle={{textTransform: 'uppercase'}}
          onPress={this.props.onPress}
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
