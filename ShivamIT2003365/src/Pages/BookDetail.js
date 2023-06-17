
import React from 'react';
import "./BookDetail.css";
import { useParams } from 'react-router-dom';
import { Books } from '../ArrayOfObj/Books';
import { useGlobalContext } from '../Context/CartContext';
import { useRentGlobalContext } from '../Context/RentContext';

const BookDetail = () => {
    const { addToCart } = useGlobalContext();
    const { addToCartRent } = useRentGlobalContext();

    const { id } = useParams();
    const book = Books.filter((book) => book.id === id)[0];

    return (
        <div className="my-3 text-center bookdetail">

            <img className='img' src={book.image} alt={book.name} />

            <div style={{ marginBottom: "10px" }}>
                <p><b style={{ marginRight: "10px" }}>Book Name:</b> {book.name}</p>
                <p><b style={{ marginRight: "10px" }}>Author:</b> {book.author}</p>
                <p><b style={{ marginRight: "10px" }}>Genre:</b> {book.genre}</p>
                <p><b style={{ marginRight: "10px" }}>Publishing Year:</b> {book.publishedYear}</p>
            </div>

            <div>
                <button type="button" className="btn btn-success" style={{ padding: "10px 30px", marginRight: "5px" }} onClick={() => addToCartRent(book)}>RENT</button>
                <button type="button" className="btn btn-success" style={{ padding: "10px 30px" }} onClick={() => addToCart(book)}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default BookDetail