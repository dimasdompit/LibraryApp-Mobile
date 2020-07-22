import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input} from 'react-native-elements';
import {Picker} from '@react-native-community/picker';
import {connect} from 'react-redux';
import {getGenre} from '../../../redux/actions/genres';

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      genre: '',
      author: '',
      status: '',
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

  componentDidMount() {
    this.getAllGenres();
  }

  render() {
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
              placeholder="Harry Potter and The Prisoner of Azkaban"
            />
            <Input
              inputStyle={{fontSize: 14}}
              label="Description"
              labelStyle={{marginBottom: -5}}
              placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              quidem minus dignissimos, laborum pariatur repellat recusandae nisi!
              Laudantium neque sapiente, dolorem eum animi nulla incidunt deleniti
              praesentium, quam minus ab?"
            />
            <Picker
              mode="dropdown"
              selectedValue={this.state.genre}
              onValueChange={async (value) => {
                await this.setState({genre: value});
              }}>
              <Picker.Item label="--Choose Genre--" value="" />
              {this.state.genre.data.map((genre) => {
                return <Picker.Item label={genre.name} value={genre.id} />;
              })}
            </Picker>
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
});

const mapDispatchToProps = {getGenre};

export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
