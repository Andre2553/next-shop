import { ICartState } from "./types";
import { Reducer } from 'redux';
import produce from "immer";

export const cart: Reducer<ICartState> = (state = { data: [] }, action) => {
   return produce(state, draft => {
      switch (action.type) {
         case 'ADD_PRODUCT_TO_CART': {
            draft.data.push(action.payload.product);
            break;
         }
         case 'DELETE_PRODUCT_FROM_CART': {
            console.log(state);
            draft.data = draft.data.filter(product => product.id !== action.payload.id);
            break;
         }
         default:
            draft.data = [];
      }
   });
}