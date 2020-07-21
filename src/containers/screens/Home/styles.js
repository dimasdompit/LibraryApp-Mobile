import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  /* Top Content */
  topContent: {
    flex: 1,
  },
  textRecent: {
    fontFamily: 'SFProText-Bold',
    fontSize: 24,
    margin: 20,
    color: '#131212',
    letterSpacing: -1,
  },
  bookList: {
    height: 250,
  },
  bannerImage: {
    height: 200,
    width: 130,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  /* MAIN CONTENT */
  mainContent: {
    flex: 1,
    backgroundColor: '#FDD978',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    paddingVertical: 20,
  },

  /* ==== CATEGORIES STYLES ==== */
  categories: {
    padding: 30,
    backgroundColor: '#f3ecc2',
    width: 350,
    borderRadius: 15,
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textCategories: {
    fontFamily: 'SFProText-Bold',
    textTransform: 'uppercase',
    fontSize: 22,
    paddingBottom: 10,
    letterSpacing: -1,
    textAlign: 'center',
    color: '#838388',
  },

  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  itemsCategories: {
    paddingHorizontal: 5,
  },

  iconContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },

  textIcon: {
    textAlign: 'center',
    fontFamily: 'SFProText-Bold',
    color: '#838388',
  },

  /* ==== ALL BOOKS CARD STYLES ==== */
  headingAllBooks: {
    paddingHorizontal: 20,
    paddingTop: 10,
    fontFamily: 'SFProText-Bold',
    color: '#131212',
    fontSize: 26,
    letterSpacing: -1,
  },

  cardAllBooks: {
    marginVertical: 20,
    backgroundColor: '#fff0c7',
    padding: 0,
    borderWidth: 0,
    overflow: 'hidden',
    borderTopStartRadius: 5,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  bookCards: {
    flexDirection: 'row',
  },

  cardsTextContainer: {
    backgroundColor: '#FDD978',
    margin: 10,
    flex: 1,
    borderRadius: 10,
    borderTopEndRadius: 50,
    borderBottomEndRadius: 50,
    padding: 10,
    justifyContent: 'center',
  },

  cardImage: {
    // flex: 1,
    height: 200,
    width: 150,
  },

  cardTitle: {
    fontSize: 16,
    fontFamily: 'SFProText-Bold',
    letterSpacing: -1,
    color: '#131212',
  },

  cardDescription: {
    fontFamily: 'SFProText-Regular',
    letterSpacing: -1,
    color: '#131212',
    fontStyle: 'italic',
  },

  cardAuthor: {
    paddingVertical: 5,
    fontFamily: 'SFProText-Semibold',
    color: '#838388',
    fontSize: 12,
    letterSpacing: -1,
  },
});
