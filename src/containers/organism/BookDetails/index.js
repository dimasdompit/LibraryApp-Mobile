import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

class BookDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardDetails}>
            <Image source={{uri: this.props.image}} style={styles.image} />
            <View style={styles.outerDetails}>
              <Text style={styles.titleDetails}>{this.props.title}</Text>
              <Text style={styles.authorDetails}>- {this.props.author} -</Text>
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

          <View>
            <Button
              title="Borrow"
              titleStyle={{
                textTransform: 'uppercase',
                fontFamily: 'SFProText-Bold',
              }}
              buttonStyle={styles.btnBorrow}
              onPress={() => alert('Button Borrow')}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default BookDetails;
