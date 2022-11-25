import { ICartState } from "./types";
import { Reducer } from 'redux';
import produce from "immer";

export const cart: Reducer<ICartState> = (state = { data: [], totalPrice: 0, totalqty: 0 }, action) => {
   console.log(state);
   return produce(state, draft => {
      switch (action.type) {
         case 'ADD_PRODUCT_TO_CART': {
            //check if product already exists in cart
            const productIndex = draft.data.findIndex(
               product => product.id === action.payload.product.id
            );
            if (productIndex >= 0) {
               draft.data[productIndex].qty++;
            } else {
               draft.data.push(action.payload.product);
            }
            draft.totalqty++;
            draft.totalPrice += Number(action.payload.product.price.slice(2));
            console.log(draft.data);
            break;
         }
         case 'CHANGE_PRODUCT_QTY': {
            console.log(state);
            const productIndex = draft.data.findIndex(
               product => product.id === action.payload.product.id
            );
            if (productIndex >= 0) {
               draft.data[productIndex].qty = Number(action.payload.qty);
            }
            if (draft.data[productIndex].qty <= 0) {
               draft.data.splice(productIndex, 1);
            }
            draft.totalqty = draft.data.reduce((total, product) => {
               return total + product.qty;
            }, 0);
            draft.totalPrice = draft.data.reduce((total, product) => {
               return total + product.qty * Number(product.price.slice(2));
            }, 0);
            break;
         }
         default:
            draft.data = [];
            draft.totalPrice = 0;
            draft.totalqty = 0;
      }
   });
}