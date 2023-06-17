import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from '../Context/CartContext';
import { useRentGlobalContext } from '../Context/RentContext';
import Search from './Search';

const Navbar = () => {
    const { cart } = useGlobalContext();
    const { cartRent } = useRentGlobalContext();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-xl" to="/">Library</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/
booklist">BookList</NavLink>
                        </li>
                    </ul>

                    <Search />

                    <NavLink className="nav-link active" aria-current="page" to="/rentcheckout" style={{ marginRight: "30px" }}>
                        <span style={{ position: "relative", right: "-25px", top: "-20px", fontSize: "18px", fontWeight: "bold" }}>{cartRent.length}</span>
                        <span style={{ position: "relative", left: "-8px", fontSize: "28px" }}><i class="fa-solid fa-book"></i></span>
                    </NavLink>

                    <NavLink className="nav-link active" aria-current="page" to="/checkout">
                        <span style={{ position: "relative", right: "-25px", top: "-20px", fontSize: "18px", fontWeight: "bold" }}>{cart.length}</span>
                        <span style={{ position: "relative", left: "-8px", fontSize: "30px" }}><i class="fa-solid fa-bag-shopping"></i></span>
                    </NavLink>

                </div>
            </div>
        </nav>
    )
}

export default Navbar