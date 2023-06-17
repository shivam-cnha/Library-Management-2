const RentReducer = (state, action) => {
    if (action.type === "ADD_TO_CART_RENT") {
        return { ...state, cartRent: [...state.cartRent, action.payload] };

    } else if (action.type === "REMOVE_FROM_CART_RENT") {
        const leftItem = state.cartRent.filter((book) => book.id !== action.payload);

        return { ...state, cartRent: leftItem }

    } else if (action.type === "REMOVE_ALL_FROM_CART_RENT") {
        return { ...state, cartRent: [] }
    }

    return state;
}

export default RentReducer;