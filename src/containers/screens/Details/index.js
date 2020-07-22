import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBookDetails} from '../../../redux/actions/books';

import BookDetails from '../../organism/BookDetails';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books.data.result,
    };
  }

  getDetails = async () => {
    const token = this.props.auth.data.token;
    const id = this.props.route.params.id;

    await this.props.getBookDetails(token, id).then((response) => {
      console.log(response);
      this.setState({
        books: response.value.data.data[0],
      });
    });
  };

  componentDidMount() {
    this.getDetails();
  }

  render() {
    return (
      <>
        <BookDetails
          id={this.state.books.id}
          title={this.state.books.title}
          image={this.state.books.image}
          author={this.state.books.author}
          genre={this.state.books.genre}
          status={this.state.books.status}
          description={this.state.books.description}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  books: state.books,
});

const mapDispatchToProps = {getBookDetails};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
