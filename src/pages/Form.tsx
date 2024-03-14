import React from 'react';
import { IGroup } from '@/types/form';
import Group from '@/components/Group';
import { useFetching } from '@/hooks/useFetching';
import Button from '@/components/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ProductGroupState, addGroup } from '@/store/slice/productSlice';

const MyForm: React.FC = () => {
  useFetching();
  const dispatch = useDispatch();
  const { productGroup } = useSelector(ProductGroupState);

  const addGroupHandler = () => {
    const newGroup: IGroup = {
      id: Date.now().toString(),
      sum: 0,
      products: [],
    };
    dispatch(addGroup(newGroup));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log(JSON.stringify(productGroup, null, 2));
  };

  const updateTotalSum = () => {
    // Пересчет итоговой суммы для всех групп
  };

  return (
    <form onSubmit={handleSubmit}>
      {productGroup.map((group) => (
        <Group
          key={group.id}
          idGroup={group.id}
          products={group.products}
          updateTotalSum={updateTotalSum}
        />
      ))}
      <Button onClick={addGroupHandler}> Добавить группу</Button>

      <button type="submit">Отправить</button>
    </form>
  );
};

export default MyForm;
