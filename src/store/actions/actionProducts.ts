import { productService } from '@/API/ProductService';
import { IGroup } from '@/types/form';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk<IGroup[]>('product/fetchProductsStatus', async () => {
  const response = await productService();
  if (response === null) {
    throw new Error('Произошла ошибка. Проверь URL');
  }
  return response;
});
