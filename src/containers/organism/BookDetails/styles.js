import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  cardDetails: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  image: {
    // flex: 1,
    width: 150,
    height: 230,
    borderRadius: 10,
    marginRight: 20,
  },

  outerDetails: {
    flex: 1,
    justifyContent: 'center',
  },

  titleDetails: {
    fontFamily: 'SFProText-Bold',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: -1,
  },

  authorDetails: {
    fontSize: 14,
    fontFamily: 'SFProText-Semibold',
    color: '#838388',
    paddingBottom: 20,
    fontStyle: 'italic',
  },

  genreDetails: {
    backgroundColor: '#FDD978',
    color: '#fff',
    width: 70,
    fontFamily: 'SFProText-Bold',
    borderRadius: 10,
    padding: 5,
    textAlign: 'center',
    marginBottom: 30,
  },

  statusDetails: {
    fontFamily: 'SFProText-Bold',
    letterSpacing: -0.5,
    color: '#131212',
  },

  statusSpan: {
    color: '#3AC759',
  },

  descriptionContainer: {
    padding: 20,
  },

  descriptionHeading: {
    fontSize: 24,
    fontFamily: 'SFProText-Bold',
    letterSpacing: -1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    color: '#131212',
  },

  descriptionDetails: {
    fontFamily: 'SFProText-Semibold',
    fontSize: 15,
    paddingTop: 10,
    letterSpacing: -0.7,
    color: '#838388',
  },

  btnBorrow: {
    width: 300,
    backgroundColor: '#FDD978',
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
});
