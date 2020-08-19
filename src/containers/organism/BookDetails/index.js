import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

import {withNavigation} from '@react-navigation/compat';
import {connect} from 'react-redux';
import {getAllBooks, borrowBooks} from '../../../redux/actions/books';

// import {REACT_API_URL} from '@env';
import {config} from '../../../config/baseUrl';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookId: this.props.id,
    };
  }

  handleBorrow = (id) => {
    const token = this.props.auth.data.token;
    const bookId = this.props.id;
    const userId = this.props.auth.data.id;

    let formData = new FormData();
    formData.append('book_id', bookId);
    formData.append('user_id', userId);
    formData.append('history_status', 'borrow');

    this.props
      .borrowBooks(token, bookId, formData)
      .then(() => {
        this.props.getAllBooks(token);
        this.props.navigation.navigate('DetailSuccess');
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
          <View style={styles.container}>
            <View style={styles.cardDetails}>
              <Image
                source={{uri: `${config.api_url}/images/${this.props.image}`}}
                style={styles.image}
              />
              <View style={styles.outerDetails}>
                <Text style={styles.titleDetails}>{this.props.title}</Text>
                <Text style={styles.authorDetails}>
                  - {this.props.author} -
                </Text>
                <Text style={styles.genreDetails}>{this.props.genre}</Text>
                <Text style={styles.statusDetails}>
                  Status :{' '}
                  <Text style={styles.statusSpan}>{this.props.status}</Text>
                </Text>
              </View>
            </View>

            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionHeading}>Summary</Text>
              <Text style={styles.descriptionDetails}>
                {this.props.description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{height: 60, backgroundColor: '#f9f9f9'}}>
          <Button
            title="Borrow"
            titleStyle={{
              textTransform: 'uppercase',
              fontFamily: 'SFProText-Bold',
            }}
            loading={this.props.books.isLoading}
            disabled={this.props.status === 'Not Available' ? true : false}
            buttonStyle={styles.btnBorrow}
            onPress={() => this.handleBorrow(this.props.id)}
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
});

const mapDispatchToProps = {getAllBooks, borrowBooks};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(BookDetails));
