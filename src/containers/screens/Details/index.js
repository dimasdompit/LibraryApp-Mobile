import React, {Component} from 'react';

import BookDetails from '../../organism/BookDetails';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: 'Harry Potter and the Prisoner of Azkaban',
          author: 'J. K. Rowling',
          description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat reprehenderit aspernatur vitae officiis eligendi quibusdam fugiat doloremque quae unde quas? Maiores reiciendis quam dolorem facere porro animi fugit, praesentium natus.
          
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat reprehenderit aspernatur vitae officiis eligendi quibusdam fugiat doloremque quae unde quas? Maiores reiciendis quam dolorem facere porro animi fugit, praesentium natus.`,
          status: 'Available',
          genre: 'Fantasy',
          image:
            'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/vintage-book-cover-template-design-fe1040a9952994208fcae6066ab78f2b_screen.jpg?ts=1561553736',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <BookDetails
          title={this.state.books[0].title}
          image={this.state.books[0].image}
          author={this.state.books[0].author}
          genre={this.state.books[0].genre}
          status={this.state.books[0].status}
          description={this.state.books[0].description}
        />
      </>
    );
  }
}

export default Details;
