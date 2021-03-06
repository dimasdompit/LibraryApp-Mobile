import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/auth';
import {getUserHistory} from '../../../redux/actions/transaction';
import {returnBooks} from '../../../redux/actions/books';
// Components
import HistoryBorrow from '../../organism/HistoryBorrow';
import UserProfile from '../../organism/UserProfile';
// Styles
import Profile from '../../../assets/images/profile1.jpg';
import {styles} from './styles';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  getHistory = () => {
    const token = this.props.auth.data.token;
    const userId = this.props.auth.data.id;

    this.props
      .getUserHistory(token, userId)
      .then((response) => {
        console.log(response);
        this.setState({
          history: response.value.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleReturn = (id) => {
    const token = this.props.auth.data.token;

    this.props
      .returnBooks(token, id)
      .then((response) => {
        this.props.navigation.navigate('ReturnSuccess');
      })
      .catch((error) => console.log(error));
  };

  handleLogout = () => {
    this.props.logout();
  };

  componentDidMount() {
    this.getHistory();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <UserProfile
          username={this.props.auth.data.username}
          image={Profile}
          role={this.props.auth.data.roles}
          onPress={this.handleLogout}
        />
        <View style={styles.historyContainer}>
          <Text style={styles.historyHeading}>My History</Text>
          {this.state.history
            .slice(0)
            .reverse()
            .map((history) => {
              return (
                <HistoryBorrow
                  key={history.history_id}
                  historyId={history.history_id}
                  users={history.users}
                  book={history.book}
                  date={history.created_at}
                  status={history.history_status}
                  onPress={() => this.handleReturn(history.history_id)}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  transaction: state.transaction,
  books: state.books,
});

const mapDispatchToProps = {logout, getUserHistory, returnBooks};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
