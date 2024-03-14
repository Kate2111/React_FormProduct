import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import productGroupSlice from './slice/productSlice';

export const store = configureStore({
  reducer: {
    productGroup: productGroupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
