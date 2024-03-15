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

  return (
    <>
      <form onSubmit={handleSubmit} className="border-[1px] border-current rounded-s mt-4 p-5">
        {productGroup.map((group, i) => (
          <Group key={group.id} idGroup={group.id} numberGroup={i} products={group.products} />
        ))}
        <Button onClick={addGroupHandler}> Добавить группу</Button>

        <div className="flex gap-5 items-end text-lg">
          <Button type="submit">Отправить</Button>
          <p>Итого: {productGroup.reduce((acc, curr) => acc + curr.sum, 0).toFixed(2)}</p>
        </div>
      </form>
    </>
  );
};

export default MyForm;
