import { useEffect } from 'react';
import { useAppDispatch } from '@/store/store';
import { fetchProducts } from '@/store/actions/actionProducts';

export const useFetching = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    window.scrollTo(0, 0);
  }, [dispatch]);
};
