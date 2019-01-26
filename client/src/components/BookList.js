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
      { id: uuid(), name: 'TestBook' }
    ]
  }

  render() {
    const { books } = this.state;

    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Add Book');
            if (name) {
              this.setState(state => ({
                books: [...state.books, { id: uuid(), name }]
              }));
            }
          }}
        >
          New Book
        </Button>
        <ListGroup>
          <TransitionGroup
            className='book-list'
          >
            {books.map(({ id, name }) => (
              <CSSTransition
                key={id}
                timeout={500}
                classNames='fade'
              >
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        books: state.books.filter(
                          book => book.id !== id
                        )
                      }));
                    }}
                  >
                    &times;
                </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }

}

export default BookList