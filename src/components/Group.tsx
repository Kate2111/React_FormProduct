import { IProduct } from '@/types/form';
import React, { useEffect } from 'react';
import ProductTable from './ProductTable';
import { useDispatch } from 'react-redux';
import { removeGroup } from '@/store/slice/productSlice';

interface GroupProps {
  idGroup: string | number;
  products: IProduct[];
  updateTotalSum: (sum: number) => void; // Функция для обновления общей суммы в родительском компоненте
}

const Group: React.FC<GroupProps> = ({ idGroup, products, updateTotalSum }) => {
  const dispatch = useDispatch();

  // Обработчик изменений в продуктах для пересчета суммы группы
  useEffect(() => {
    const totalSum = products.reduce((acc, curr) => acc + curr.sum, 0);
    updateTotalSum(totalSum); // Обновляем общую сумму в родительском компоненте
  }, [products, updateTotalSum]);

  const removeGroupHandler = () => {
    dispatch(removeGroup(idGroup));
  };

  return (
    <>
      <div>
        <div>Группа 1</div>
        <p>Сумма: {products.reduce((acc, curr) => acc + curr.sum, 0).toFixed(2)}</p>
        <button onClick={removeGroupHandler}>Удалить группу</button>
      </div>
      <ProductTable products={products} idGroup={idGroup} />
    </>
  );
};

export default Group;
