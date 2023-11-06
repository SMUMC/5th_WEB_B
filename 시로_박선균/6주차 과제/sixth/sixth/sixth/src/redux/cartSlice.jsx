import { createSlice } from '@reduxjs/toolkit';
import chartItems from '../constants/chartItems';

const initialState = {
    cartItems: chartItems,
    totalCount : chartItems.reduce((accumulator, currentItem) => {
        // 현재 항목의 amount 속성 값을 누적값에 더합니다
        return accumulator + parseInt(currentItem.amount);
    }, 0),
    total: chartItems.reduce((accumulator, currentItem) => {
        // 현재 항목의 amount 속성 값을 누적값에 더합니다
        return accumulator + parseInt(currentItem.price);
    }, 0),
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
            console.log(state.totalCount);
            state.total += parseInt(cartItem.price);
        },
        removeItem: (state, action) => {
            const cartItem = state.cartItems.find(
                (item) => item.id === action.payload
            );
            if(cartItem.amount > 0){
                cartItem.amount -= 1;
                state.totalCount -= 1;
                console.log(state.totalCount);
                state.total -= parseInt(cartItem.price);
            }
            if (cartItem.amount === 0) {
                // 0이 되었을 때 해당 아이템 삭제
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
            }
        },
        clearItem : (state,action) => {
            state.cartItems.forEach(item => {
                state.cartItems = [];
                item.amount = 0;
            });
            state.totalCount = 0;
            state.total = 0;
        }
    },
});

export const { addItem, removeItem,clearItem } = cartSlice.actions;
export default cartSlice.reducer;