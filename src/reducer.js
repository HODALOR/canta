// Always listening for a dispatch

import Basket from "./basket";

export const initialState = {
    basket: [], 
}




// State =>
// Action => What we wanna do
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET': 
        //get the previous state and add it to the current state and return 
            return {
                ...state, 
                basket: [...state.basket, action.item], 
            }

            case"REMOVE_FROM_BADKET":
            const index = state.basket.findIndex(
                (basketItem => basketItem.id === action.id)
            );

            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1);

            } else {
                console.warn(
                    `can't remove item (id: ${action.id} as  its not in the basket`)

            
        }

            return {
                ...state,
               basket: newBasket
            }

        default: 
            return state;
    }
}

export default reducer;

