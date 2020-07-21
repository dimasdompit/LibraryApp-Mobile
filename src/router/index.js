import React from 'react';

/* =============== REACT NAVIGATIONS =============== */
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {connect} from 'react-redux';

/* =============== STACK SCREENS =============== */
import {
  Home,
  Profile,
  Login,
  Register,
  Details,
  DetailSuccess,
  ReturnSuccess,
} from '../containers/screens';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* ====== HOME TABS ====== */
const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: '#FDD978'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

/* ====== MAIN APP NAVIGATOR ====== */
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Home}>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="DetailSuccess"
        component={DetailSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReturnSuccess"
        component={ReturnSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

/* ====== ROOT NAVIGATOR ====== */
const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Login}>
        {props.auth.isLoggedIn ? (
          <>
            <Stack.Screen
              name="AppNavigator"
              component={AppNavigator}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
});

export default connect(mapStateToProps)(RootNavigator);
