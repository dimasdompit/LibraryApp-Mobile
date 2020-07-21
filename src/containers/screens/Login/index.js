import React, {Component} from 'react';
import {View, ScrollView, Dimensions, AsyncStorage} from 'react-native';

/* ===================== REDUX CONFIG SETUP ===================== */
import {connect} from 'react-redux';
import {login} from '../../../redux/actions/auth';

import {Image, Button, Input, Text} from 'react-native-elements';

import vectorImage from '../../../assets/images/vector1.png';

import {styles} from './styles';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props
      .login(data)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <ScrollView style={styles.loginContainer}>
          <View style={styles.imageContainer}>
            <Image source={vectorImage} style={styles.image} />
            <Text style={styles.headingLogin}>Let's get started!</Text>
          </View>

          <View>
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
                onChangeText={(text) => this.setState({username: text})}
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
                onChangeText={(text) => this.setState({password: text})}
              />
            </View>

            <View>
              <Button
                type="clear"
                title="Forget the password?"
                titleStyle={styles.forgetPassword}
              />
            </View>

            <View>
              <Button
                title="Sign In"
                buttonStyle={styles.btnLogin}
                loading={this.props.auth.isLoading}
                onPress={this.handleLogin}
              />
            </View>

            <View>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <Button
                title="Sign Up"
                type="clear"
                titleStyle={styles.signup}
                onPress={() => this.props.navigation.navigate('Register')}
              />
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {login};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
