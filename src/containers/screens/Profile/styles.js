import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },

  /* ===== PROFILE STYLES ===== */
  profileContainer: {
    flex: 1,
    // backgroundColor: '#FDD978',
    backgroundColor: '#333951',
    alignItems: 'center',
    paddingVertical: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  username: {
    fontSize: 24,
    fontFamily: 'SFProText-Bold',
    color: '#fff',
    marginTop: 20,
  },
  role: {
    fontFamily: 'SFProText-Bold',
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: '#3AC759',
    textAlign: 'center',
    justifyContent: 'center',
    color: '#f9f9f9',
    backgroundColor: '#3AC759',
    textTransform: 'uppercase',
  },

  /* ===== HISTORY STYLES ===== */
  historyContainer: {
    flex: 1,
    padding: 20,
  },

  historyHeading: {
    fontFamily: 'SFProText-Bold',
    color: '#838388',
    letterSpacing: -1,
    fontSize: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#838388',
  },
});
