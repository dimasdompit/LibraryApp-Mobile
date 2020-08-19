import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Picker} from '@react-native-community/picker';
import {withNavigation} from '@react-navigation/compat';

import ImagePicker from 'react-native-image-picker';

import {connect} from 'react-redux';
import {getGenre} from '../../../redux/actions/genres';
import {getAuthor} from '../../../redux/actions/author';

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: null,
      description: '',
      genre: '',
      author: '',
      status: 'Available',
    };
  }

  getAllGenres = async () => {
    const token = this.props.auth.data.token;

    await this.props
      .getGenre(token)
      .then((response) => {
        this.setState({
          genre: response.value.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getAllAuthors = async () => {
    const token = this.props.auth.data.token;

    await this.props
      .getAuthor(token)
      .then((response) => {
        this.setState({
          author: response.value.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChooseImage = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };

  componentDidMount() {
    this.getAllGenres();
    this.getAllAuthors();
    this.props.genres.data;
    this.props.author.data;
  }

  render() {
    const {image} = this.state;
    return (
      <View style={{flex: 1, padding: 20}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#f9c12d',
            padding: 20,
            margin: 10,
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
            Add Books
          </Text>

          <View
            style={{
              flex: 1,
              backgroundColor: '#f9f9f9',
              padding: 10,
              borderRadius: 20,
            }}>
            <Input
              inputStyle={{fontSize: 14, flexWrap: 'wrap'}}
              label="Title"
              labelStyle={{marginBottom: -5}}
              onChangeText={async (text) => await this.setState({title: text})}
              placeholder="Harry Potter and The Prisoner of Azkaban"
            />
            <Text>Choose Genre :</Text>
            <Picker
              mode="dropdown"
              selectedValue={this.state.genre}
              onValueChange={async (value) => {
                await this.setState({genre: value});
              }}>
              {this.props.genres.data.map((genre) => {
                <Picker.Item label="--Choose Genre--" value="" />;
                return (
                  <Picker.Item
                    key={genre.genre_id}
                    label={genre.genre_name}
                    value={genre.genre_id}
                  />
                );
              })}
            </Picker>
            <Text>Choose Authors :</Text>
            <Picker
              mode="dropdown"
              selectedValue={this.state.author}
              onValueChange={async (value) => {
                await this.setState({author: value});
              }}>
              {this.props.author.data.map((author) => {
                <Picker.Item label="--Choose Author--" value="" />;
                return (
                  <Picker.Item
                    key={author.author_id}
                    label={author.author_name}
                    value={author.author_id}
                  />
                );
              })}
            </Picker>
            <Input
              inputStyle={{fontSize: 14}}
              label="Description"
              labelStyle={{marginBottom: -5}}
              placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              quidem minus dignissimos, laborum pariatur repellat recusandae nisi!
              Laudantium neque sapiente, dolorem eum animi nulla incidunt deleniti
              praesentium, quam minus ab?"
            />
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {image && (
                <Image
                  source={{uri: image.uri}}
                  style={{width: 150, height: 300}}
                />
              )}
              <Button title="Choose Photo" onPress={this.handleChooseImage} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
  genres: state.genres,
  author: state.author,
});

const mapDispatchToProps = {getGenre, getAuthor};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(AddBooks));
