import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.activeBook) {
      return <h2>Select book from list to start...</h2>
    }
    return (
      <div className="col-sm-8">
        <h1>Book title: {this.props.activeBook.title}</h1>
        <span>Total pages: {this.props.activeBook.pages}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeBook: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
