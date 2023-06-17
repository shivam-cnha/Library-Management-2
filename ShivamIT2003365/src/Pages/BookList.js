import React from 'react'
import "./Booklist.css";
import { Books } from "../ArrayOfObj/Books"
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    const navigate = useNavigate();
    return (
        <div className='bookListContainer'>
            <h2 className='bookListTitle'>List of Books</h2>
            <table class="table table-striped booklist">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Publish Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Books.map((book) => (
                            <tr className='cursor-pointer' key={book.id} onClick={() => navigate(`/bookdetailpage/${book.id}`)}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                                <td>{book.genre}</td>
                                <td>{book.publishedYear}</td>
                                <td>{book.stock > 0 ? "In stock" : "out of stock"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BookList
