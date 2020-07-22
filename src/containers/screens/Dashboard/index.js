import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

export class Dashboard extends Component {
  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          }}>
          Dashboard
        </Text>
        <TouchableOpacity
          style={{height: 200}}
          onPress={() => this.props.navigation.navigate('ManageBooks')}>
          <Card
            containerStyle={{
              flex: 1,
              borderRadius: 20,
              padding: 20,
              alignContent: 'center',
              backgroundColor: '#FDD978',
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Icon
                name="book"
                type="font-awesome"
                color="#000"
                iconStyle={{fontSize: 70}}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
                Manage Books
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 200}} onPress={() => alert('ok')}>
          <Card
            containerStyle={{
              flex: 1,
              borderRadius: 20,
              padding: 20,
              alignContent: 'center',
              backgroundColor: '#FDD978',
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Icon
                name="user"
                type="font-awesome"
                color="#000"
                iconStyle={{fontSize: 70}}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
                Manage Authors
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 200}} onPress={() => alert('ok')}>
          <Card
            containerStyle={{
              flex: 1,
              borderRadius: 20,
              padding: 20,
              alignContent: 'center',
              backgroundColor: '#FDD978',
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <Icon
                name="heart"
                type="font-awesome"
                color="#000"
                iconStyle={{fontSize: 70}}
              />
              <Text style={{fontSize: 30, fontWeight: 'bold', marginLeft: 10}}>
                Manage Genres
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;
