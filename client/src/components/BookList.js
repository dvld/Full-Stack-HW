import React, { Component } from 'react'

import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

import uuid from 'uuid'

class BookList extends Component {
  state = {
    books: [
      { id: uuid() }
    ]
  }

  render() {
    const { books } = this.state;

    return (
      <Container>
        <Button
        color='dark'
        style={{marginBottom: '2rem'}}
        onClick={() => {
          const name
        }}
        >
        New Book
        </Button>
      </Container>
    )
  }

}

