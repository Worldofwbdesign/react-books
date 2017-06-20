import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions';

class BookList extends Component {
  renderBooks() {
    return this.props.books.map(book => {
      return <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderBooks()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
