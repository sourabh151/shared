import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';
import Book from './Book';

function BookList() {
  const secret = "abrakadabra"
  function logger(){
    console.log(secret);
  }
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} logger={logger}/>;
        })}
      </section>
    </>
  );
}
export default BookList;

//const root = ReactDOM.createRoot(document.getElementById('root'));
//
//root.render(<BookList />);
