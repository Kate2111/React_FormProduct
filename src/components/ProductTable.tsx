import { FC } from 'react';
import ProductRow from './ProductRow';
import { IProduct } from '@/types/form';
import { addProduct, removeProduct } from '@/store/slice/productSlice';
import { useDispatch } from 'react-redux';

interface ProductTableProps {
  products: IProduct[];
  idGroup: string | number;
}

const ProductTable: FC<ProductTableProps> = ({ products, idGroup }) => {
  const dispatch = useDispatch();

  const addProductHandler = () => {
    const newProduct: IProduct = {
      id: `product-${Date.now()}`,
      name: '',
      sum: 0,
      count: 0,
      price: 0,
    };
    dispatch(addProduct({ groupId: idGroup, product: newProduct }));
  };

  const removeProductHandler = (productId: string | number) => {
    dispatch(removeProduct({ groupId: idGroup, productId: productId }));
  };

  return (
    <div>
      <table>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} onProductRemove={removeProductHandler} />
          ))}
        </tbody>
      </table>
      <button onClick={addProductHandler}>Добавить продукт</button>
    </div>
  );
};

export default ProductTable;
