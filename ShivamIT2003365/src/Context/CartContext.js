import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const AppContext = createContext();

const initialState = {
    cart: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (book) => {
        return dispatch({ type: "ADD_TO_CART", payload: book });
    }

    const removeFromCart = (id) => {
        return dispatch({ type: "REMOVE_FROM_CART", payload: id })
    }

    const removeAllFromCart = (id) => {
        return dispatch({ type: "REMOVE_ALL_FROM_CART" })
    }

    return <AppContext.Provider value={{ ...state, addToCart, removeFromCart, removeAllFromCart }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };