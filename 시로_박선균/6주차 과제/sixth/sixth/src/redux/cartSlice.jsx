import { createSlice } from '@reduxjs/toolkit';
import chartItems from '../constants/chartItems';

const initialState = {
    cartItems: chartItems,
    totalCount : chartItems.reduce((accumulator, currentItem) => {
        // 현재 항목의 amount 속성 값을 누적값에 더합니다
        return accumulator + parseInt(currentItem.amount);
    }, 0)
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            
            cartItem.amount += 1;
            state.totalCount+=1;
            console.log(state.totalCount)
        },
        removeItem: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            if(cartItem.amount > 0){
                cartItem.amount -= 1;
                state.totalCount -= 1;
                console.log(state.totalCount)
            }
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;