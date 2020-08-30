export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) => 
    // Increment all prices in basket and return number
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,   // return the what is already in state
                basket: [...state.basket, action.item] // return a changed basket
            };
        case 'REMOVE_FROM_BASKET':
            //Login

            // Clone the basket
            let newBasket = [...state.basket];

            // Check/Find the item in the current basket and get ID
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

             if(index >= 0){
                //  remove item if exists
                newBasket.splice(index, 1);
             }else{
                 console.warn('Cannot find product id: ${action.id} ');
             }

            return {
                ...state, basket: newBasket
            };
        default:
            return state;
        
    }
}

export default reducer;

