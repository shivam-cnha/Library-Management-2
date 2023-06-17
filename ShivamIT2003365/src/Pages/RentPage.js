import React from 'react'
import "./Booklist.css";
import { useNavigate } from 'react-router-dom';
import { useRentGlobalContext } from '../Context/RentContext';

const RentPage = () => {
    const { cartRent, removeFromCartRent } = useRentGlobalContext();
    let totalPrice = 0;

    cartRent.map((price) => totalPrice = totalPrice + parseInt(price.rentPrice));

    const navigate = useNavigate();
    return (
        <>
            {
                cartRent.length > 0 ?
                    <div className='bookListContainer'>
                        <h2 className='bookListTitle'>CheckOut</h2>
                        <table class="table table-striped booklist">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Issue Date</th>
                                    <th scope="col">Submission Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartRent?.map((book) => (
                                        <tr className='cursor-pointer' key={book.id}>
                                            <td>{book.name}</td>
                                            <td>₹{book.rentPrice}</td>
                                            <td>{book.issueDate}</td>
                                            <td>{book.submissionDate}</td>
                                            <td onClick={() => removeFromCartRent(book.id)}><i class="fa-sharp fa-solid fa-trash"></i></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <table className="table table-striped w-25 mt-5" style={{ marginLeft: "auto" }}>

                            <thead>
                                <tr className='table-light'>
                                    <th scope="col">Total Quantity</th>
                                    <th scope="col">{cartRent.length}</th>
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
                                    <button type="button" className="btn btn-dark w-100 p-2 mt-2" style={{ position: "relative", left: "48px", fontWeight: "bold" }} onClick={() => navigate("/orderplaced/rent")}>BUY</button>
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

export default RentPage