import uuid from 'uuid'
import {
  GET_BOOKS,
  ADD_BOOK,
  DELETE_BOOK
} from '../actions/types'

const initialState = {
  books: [
    { id: uuid(), name: 'TestBook' },
    { id: uuid(), name: 'AnotherBook' },
    { id: uuid(), name: 'BookAgain' },
    { id: uuid(), name: 'LastBook' }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {

    case GET_BOOKS:
      return {
        ...state
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [action.payload, ...state.books]
      };

    default:
      return state;
  }
}