import { IGroup } from '@/types/form';

export const productService = (): Promise<IGroup[]> => {
  const productsGroup: IGroup[] = [
    {
      id: 'gld34w5',
      sum: 19640,
      products: [
        {
          id: '45fghd',
          name: 'Колбаса',
          sum: 6300,
          count: 3,
          price: 2100,
        },
        {
          id: 'g534f7k',
          name: 'Сосиска',
          sum: 13340,
          count: 10,
          price: 1340,
        },
      ],
    },
    {
      id: 'ghf43ty5423',
      sum: 6762,
      products: [
        {
          id: 'grh5673f',
          name: 'Молоко',
          sum: 4662,
          count: 3,
          price: 666,
        },
        {
          id: '445h7je3',
          name: 'Масло',
          sum: 2100,
          count: 4,
          price: 525,
        },
      ],
    },
  ];

  return new Promise((res) => {
    setTimeout(() => {
      res(productsGroup);
    }, 2000);
  });
};
