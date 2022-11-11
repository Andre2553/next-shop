import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";
import { ICartState } from "./modules/cart/types";

export interface IState{
   cart: ICartState
}

export const store = configureStore({reducer:rootReducer});