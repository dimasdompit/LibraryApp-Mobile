import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';

import {styles} from '../../../containers/screens/Home/styles';

const ItemCategories = (props) => {
  return (
    <View style={styles.itemsCategories}>
      <Icon
        reverse
        name={props.icon}
        type="font-awesome-5"
        color={props.color}
        size={35}
        containerStyle={styles.iconContainer}
        onPress={props.onPress}
      />
      <Text style={styles.textIcon}>{props.name}</Text>
    </View>
  );
};

export default ItemCategories;
