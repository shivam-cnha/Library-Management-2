import React from 'react'
import "./Booklist.css";
import { useGlobalContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const BuyPage = () => {
    const { cart, removeFromCart } = useGlobalContext();
    let totalPrice = 0;

    cart.map((price) => totalPrice = totalPrice + parseInt(price.buyPrice));

    const navigate = useNavigate();

    return (
        <>
            {
                cart.length > 0 ?
                    <div className='bookListContainer'>
                        <h2 className='bookListTitle'>CheckOut</h2>
                        <table class="table table-striped booklist">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart?.map((book) => (
                                        <tr className='cursor-pointer' key={book.id}>
                                            <td>{book.name}</td>
                                            <td>{book.genre}</td>
                                            <td>₹{book.buyPrice}</td>
                                            <td onClick={() => removeFromCart(book.id)}><i class="fa-sharp fa-solid fa-trash"></i></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <table className="table table-striped w-25 mt-5" style={{ marginLeft: "auto" }}>

                            <thead>
                                <tr className='table-light'>
                                    <th scope="col">Total Quantity</th>
                                    <th scope="col">{cart.length}</th>
                                </tr>
                            </thead>

                            <thead>
                                <tr className='table-dark'>
                                    <th scope="col">Total Price</th>
                                    <th scope="col">₹ {totalPrice}</th>
                                </tr>

                                </thead>
                            <thead>
                                <tr className='table-dark'>
                                    <button type="button" className="btn btn-dark w-100 p-2 mt-2" style={{ position: "relative", left: "48px", fontWeight: "bold" }} onClick={() => navigate("/orderplaced/buy")}>BUY</button>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    :
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <p style={{ fontSize: "50px", fontWeight: "bold" }}>Cart is Empty</p>
                        <br />
                        <button className='btn btn-dark p-3' onClick={() => navigate("/booklist")}>Continue Shopping</button>
                    </div>
            }

        </>
    )
}

export default BuyPage