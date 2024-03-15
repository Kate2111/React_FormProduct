import { IProduct } from '@/types/form';
import React from 'react';
import ProductTable from './ProductTable';
import { useDispatch } from 'react-redux';
import { removeGroup } from '@/store/slice/productSlice';
import Button from './Button';

interface GroupProps {
  idGroup: string | number;
  products: IProduct[];
  numberGroup: number;
}

const Group: React.FC<GroupProps> = ({ idGroup, products, numberGroup }) => {
  const dispatch = useDispatch();

  const removeGroupHandler = () => {
    dispatch(removeGroup(idGroup));
  };

  return (
    <div className="border-[1px] border-current rounded-s mt-4 p-5">
      <div>
        <div>Группа {numberGroup + 1}</div>
        <p>Сумма: {products.reduce((acc, curr) => acc + curr.sum, 0).toFixed(2)}</p>
        <Button onClick={removeGroupHandler} color="ERROR">
          Удалить группу
        </Button>
      </div>
      <ProductTable products={products} idGroup={idGroup} />
    </div>
  );
};

export default Group;
