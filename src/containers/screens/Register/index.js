import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import {Image, Button, Input, Text} from 'react-native-elements';

import vectorImage from '../../../assets/images/vector2.png';

// const {width: WIDTH} = Dimensions.get('window');

class Register extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <ScrollView style={styles.registerContainer}>
          <View style={styles.imageContainer}>
            <Image source={vectorImage} style={styles.image} />
            <Text style={styles.headingLogin}>Create an account</Text>
          </View>

          <View style={styles.inputContainer}>
            <Input
              containerStyle={styles.username}
              placeholder="Username"
              leftIcon={{
                type: 'font-awesome',
                name: 'user',
                color: '#ffc62b',
              }}
              inputStyle={styles.input}
            />
            <Input
              placeholder="Password"
              secureTextEntry
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: '#ffc62b',
              }}
              inputStyle={styles.input}
            />
          </View>

          <View style={styles.termsView}>
            <Text style={styles.textAgree}>
              By signing up you accept{' '}
              <Text style={styles.textTerms}>Terms &amp; Conditions</Text>
            </Text>
          </View>

          <View>
            <Button
              title="Sign Up"
              buttonStyle={styles.btnRegister}
              onPress={() => alert('DOMPIT GANTENG!')}
            />
          </View>

          <View>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Button
              title="Sign In"
              type="clear"
              titleStyle={styles.signup}
              onPress={() => this.props.navigation.navigate('Login')}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    width: null,
    height: null,
    paddingHorizontal: 30,
    // justifyContent: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },

  imageContainer: {
    alignItems: 'center',
  },

  image: {
    width: 350,
    height: 250,
  },

  headingLogin: {
    fontFamily: 'SFProText-Bold',
    marginVertical: 10,
    fontSize: 22,
    color: '#ffc62b',
  },

  inputContainer: {
    paddingHorizontal: 30,
    width: 380,
    alignSelf: 'center',
  },

  username: {
    marginBottom: -10,
  },

  input: {
    fontSize: 15,
    fontFamily: 'SFProText-Regular',
  },

  termsView: {
    marginBottom: 20,
  },

  textAgree: {
    textAlign: 'center',
    color: '#aaa',
    fontFamily: 'SFProText-Regular',
  },

  textTerms: {
    color: '#ffc62b',
    textDecorationLine: 'underline',
    fontFamily: 'SFProText-Bold',
  },

  btnRegister: {
    borderRadius: 20,
    backgroundColor: '#ffc62b',
    width: 280,
    alignSelf: 'center',
  },

  footerText: {
    marginTop: 60,
    color: '#aaa',
    textAlign: 'center',
    fontFamily: 'SFProText-Regular',
  },

  signup: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffc62b',
    textDecorationLine: 'underline',
    fontFamily: 'SFProText-Bold',
  },
});

export default Register;
