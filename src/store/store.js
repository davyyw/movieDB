import { configureStore } from '@reduxjs/toolkit';
import favReducer from '../features/favorite/favSlice';
//import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    fav: favReducer,
  }
});
