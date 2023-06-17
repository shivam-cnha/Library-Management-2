const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        return { ...state, cart: [...state.cart, action.payload] };

    } else if (action.type === "REMOVE_FROM_CART") {
        const leftItem = state.cart.filter((book) => book.id !== action.payload);

        return { ...state, cart: leftItem }

    } else if (action.type === "REMOVE_ALL_FROM_CART") {
        return { ...state, cart: [] }
    }

    return state;
}

export default cartReducer;