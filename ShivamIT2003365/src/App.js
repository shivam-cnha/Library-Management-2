import "./App.css";
import Navbar from "./Components/Navbar";
import BookDetail from "./Pages/BookDetail";
import BookList from "./Pages/BookList";
import BuyPage from "./Pages/BuyPage";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import OrderPlaced from "./Pages/OrderPlaced";
import RentPage from "./Pages/RentPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/bookdetailpage/:id" element={<BookDetail />} />
        <Route path="/checkout" element={<BuyPage />} />
        <Route path="/rentcheckout" element={<RentPage />} />
        <Route path="/orderplaced/:page" element={<OrderPlaced />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;