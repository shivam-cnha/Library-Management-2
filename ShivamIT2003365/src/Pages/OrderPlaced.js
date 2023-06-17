import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/CartContext';
import { useRentGlobalContext } from '../Context/RentContext';

const OrderPlaced = () => {
    const { removeAllFromCart } = useGlobalContext();
    const { removeAllFromCartRent } = useRentGlobalContext();

    const navigate = useNavigate();

    const { page } = useParams();
    console.log(page)

    const continueHandle = () => {
        if (page == "rent") {
            removeAllFromCartRent();
        } else if (page == "buy") {
            removeAllFromCart();
        }
        navigate("/booklist");
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <p style={{ fontSize: "50px", fontWeight: "bold" }}>Order placed successfully</p>
            <br />
            <button className='btn btn-dark p-3' onClick={continueHandle}>Continue Shopping</button>
        </div>
    )
}

export default OrderPlaced