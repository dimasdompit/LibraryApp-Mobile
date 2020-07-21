import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import Moment from 'react-moment';

import {connect} from 'react-redux';
import {returnBooks} from '../../../redux/actions/books';
import {withNavigation} from '@react-navigation/compat';

import {styles} from '../../screens/Profile/styles';

export class HistoryBorrow extends Component {
  constructor(props) {
    super(props);
  }

  handleReturn = (id) => {
    const token = this.props.auth.data.token;

    this.props
      .returnBooks(token, id)
      .then((response) => {
        this.props.navigation.navigate('ReturnSuccess');
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log(this.props);
    return (
      <View>
        <Card containerStyle={{flex: 1, borderRadius: 20}}>
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#838388',
                alignSelf: 'flex-end',
                marginBottom: 15,
              }}>
              Borrowed Date:{' '}
              <Moment element={Text} format="D MMM YYYY HH:mm">
                {this.props.date}
              </Moment>
            </Text>
          </View>

          <Text
            style={{
              textAlign: 'center',
              marginBottom: 10,
              fontStyle: 'italic',
            }}>
            {this.props.users}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            <Text style={{fontWeight: '100', color: '#838388'}}>
              Borrowed Books:
            </Text>{' '}
            {this.props.book}
          </Text>
          {this.props.status === 'borrow' ? (
            <Button
              buttonStyle={{backgroundColor: '#f9c12d'}}
              title="Return"
              onPress={() => this.handleReturn(this.props.historyId)}
            />
          ) : (
            <View
              style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <Icon name="check" type="font-awesome" color="green" />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'green',
                  fontStyle: 'italic',
                }}>
                Returned
              </Text>
            </View>
          )}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
});

const mapDispatchToProps = {returnBooks};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(HistoryBorrow));
