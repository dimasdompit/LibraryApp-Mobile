import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';

// Components
import HistoryBorrow from '../../organism/HistoryBorrow';
import UserProfile from '../../organism/UserProfile';

// Styles
import Profile from '../../../assets/images/profile1.jpg';

export class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'dimasdoms',
      role: 'user',
      history: [
        {
          history_id: '1',
          users: 'dimasdoms',
          book: 'Harry Potter and the Prisoner of Azkaban',
          created_at: '17 July 2020',
          history_status: 'borrow',
        },
        {
          history_id: '2',
          users: 'dimasdoms',
          book: 'Murder on the Orient Express',
          created_at: '20 July 2020',
          history_status: 'return',
        },
      ],
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <UserProfile
          username={this.state.username}
          image={Profile}
          role={this.state.role}
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
                  users={history.users}
                  book={history.book}
                  date={history.created_at}
                  status={history.history_status}
                />
              );
            })}
        </View>
      </ScrollView>
    );
  }
}

export default ProfileScreen;
