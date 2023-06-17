import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/RentReducer";

const AppContext = createContext();

const initialState = {
    cartRent: []
}

const RentAppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCartRent = (book) => {
        return dispatch({ type: "ADD_TO_CART_RENT", payload: book });
    }

    const removeFromCartRent = (id) => {
        return dispatch({ type: "REMOVE_FROM_CART_RENT", payload: id })
    }

    const removeAllFromCartRent = () => {
        return dispatch({ type: "REMOVE_ALL_FROM_CART_RENT" })
    }

    return <AppContext.Provider value={{ ...state, addToCartRent, removeFromCartRent, removeAllFromCartRent }}>{children}</AppContext.Provider>
}

const useRentGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, RentAppProvider, useRentGlobalContext };