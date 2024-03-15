// Product.tsx
import React, { useState, useEffect } from "react";
import Button from "./Button";

interface ProductProps {
  product: {
    id: string;
    title: string;
    price: number;
    quantity: number;
    sum: number;
  };
  updateProduct: (
    id: string,
    updatedFields: Partial<ProductProps["product"]>
  ) => void;
  removeProduct: (id: string) => void;
}

const Product: React.FC<ProductProps> = ({
  product,
  updateProduct,
  removeProduct,
}) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  // Обновляем сумму продукта при изменении цены или количества
  useEffect(() => {
    const newSum = price * quantity;
    updateProduct(product.id, { price, quantity, sum: newSum });
  }, [price, quantity, updateProduct, product.id]);

  return (
    <tr>
      <td>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            updateProduct(product.id, { title: e.target.value });
          }}
        />
      </td>
      <td>
        <input
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </td>
      <td>
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
      </td>
      <td>{(price * quantity).toFixed(2)}</td>
      <td>
        <Button onClick={() => removeProduct(product.id)} color="ERROR">
          Удалить
        </Button>
      </td>
    </tr>
  );
};

export default Product;
