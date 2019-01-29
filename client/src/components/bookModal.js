import React, { Component } from 'react'

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

import { connect } from 'react-redux'
import { addBook } from '../actions/bookActions'

class BookModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    const newBook = {
      name: this.state.name
    }

    // add book with addBook action
    this.props.addBook(newBook);

    // close modal
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Book
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >

          <ModalHeader
            toggle={this.toggle}
          >
            Add New Book
          </ModalHeader>

          <ModalBody>
            <Form
              onSubmit={this.onSubmit}
            >

              <FormGroup>
                <Label
                  for='book'
                >
                  Book
                </Label>
                <Input
                  type='text'
                  name='name'
                  id='book'
                  placeholder='Add new book'
                  onChange={this.onChange}
                />
                <Button
                  color='dark'
                  style={{ marginTop: '2rem' }}
                  block
                >
                  Add Book
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div >
    )
  }
}

const mapStateToProps = state => ({
  book: state.book
});

export default connect(mapStateToProps, { addBook })(BookModal);