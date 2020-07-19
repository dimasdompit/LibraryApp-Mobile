import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    width: null,
    height: null,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    position: 'relative',
  },

  logo: {
    width: 200,
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

  forgetPassword: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 150,
    fontFamily: 'SFProText-Semibold',
    marginTop: -10,
    marginBottom: 20,
  },

  btnLogin: {
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
