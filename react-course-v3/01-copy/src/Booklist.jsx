import React, { Component } from 'react'
import Book from './Book'
import "./booklist.css"
// import img1 from "./images/book-1.jpg"
import img2 from "./images/book-2.jpg"
const books = [
    {
        author: 'Jordan Moore',
        title: 'Interesting Facts For Curious Minds',
        img: "/src/images/book-1.jpg",
        id: 1,
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: img2,
        id: 2,
    },
];
export class Booklist extends Component {
    render() {
        return (
            <section className='Booklist'>
                {
                    books.map((book) => {
                        return <Book {...book} key={book.id} />
                    })
                }
            </section>
        )
    }
}

export default Booklist