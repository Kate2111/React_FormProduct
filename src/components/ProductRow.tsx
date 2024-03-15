import React, { useCallback, useEffect } from "react";
import Input from "./Input";
import { IProduct } from "@/types/form";
import Button from "./Button";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { updateProduct } from "@/store/slice/productSlice";

interface ProductRowProps {
  product: IProduct;
  onProductRemove: (id: string | number) => void;
  idGroup: string | number;
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  onProductRemove,
  idGroup,
}) => {
  const dispatch = useDispatch();

  const debouncedUpdate = useCallback(
    debounce((field: keyof IProduct, value: string | number) => {
      dispatch(
        updateProduct({
          groupId: idGroup,
          productId: product.id,
          product: { [field]: value },
        })
      );
    }, 400),
    [dispatch, idGroup, product.id]
  );

  useEffect(() => {
    return () => debouncedUpdate.cancel();
  }, [debouncedUpdate]);

  const handleInputChange = (field: keyof IProduct, value: string | number) => {
    debouncedUpdate(field, value);
  };

  return (
    <tr className="flex gap-5 items-end">
      <td>
        <Input
          type="text"
          value={product.name}
          onChange={(newValue) => handleInputChange("name", newValue)}
          title={"Название продукта"}
          placeholder="Название продукта"
        />
      </td>
      <td>
        <Input
          type="number"
          value={product.price}
          onChange={(newValue) => handleInputChange("price", newValue)}
          title={"Цена"}
          placeholder="Цена продукта"
          min="0"
          step="0.01"
        />
      </td>
      <td>
        <Input
          type="number"
          value={product.count}
          onChange={(newValue) => handleInputChange("count", newValue)}
          title={"Кол-во"}
          placeholder="Количество продукта"
        />
      </td>
      <td>
        <Input
          type="number"
          value={product.sum}
          onChange={(newValue) => handleInputChange("sum", newValue)}
          title={"Сумма"}
        />
      </td>
      <td>
        <Button onClick={() => onProductRemove(product.id)} color="ERROR">
          Удалить
        </Button>
      </td>
    </tr>
  );
};

export default ProductRow;
