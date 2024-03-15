import React from "react";
import Input from "./Input";
import { IProduct } from "@/types/form";
import Button from "./Button";

interface ProductRowProps {
  product: IProduct;
  onProductRemove: (id: string | number) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  onProductRemove,
}) => {
  const { id, name, sum, count, price } = product;

  return (
    <tr>
      <td>
        <Input
          type="text"
          value={name}
          onChange={(newValue) => console.log(newValue)}
          title={"Название продукта"}
          placeholder="Название продукта"
        />
      </td>
      <td>
        <Input
          type="number"
          value={price}
          onChange={(newValue) => console.log(newValue)}
          title={"Цена"}
          placeholder="Цена продукта"
          min="0"
          step="0.01"
        />
      </td>
      <td>
        <Input
          type="number"
          value={count}
          onChange={(newValue) => console.log(newValue)}
          title={"Кол-во"}
          placeholder="Количество продукта"
        />
      </td>
      <td>
        <Input
          type="number"
          value={sum}
          title={"Сумма"}
          onChange={(newValue) => console.log(newValue)}
        />
      </td>
      <td>
        <Button onClick={() => onProductRemove(id)} color="ERROR">
          Удалить
        </Button>
      </td>
    </tr>
  );
};

export default ProductRow;
