import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchProducts } from "../actions/actionProducts";
import { IGroup, IProduct } from "@/types/form";

export interface ProductGroupState {
  loading: "pending" | "succeeded" | "failed";
  error: string;
  productGroup: IGroup[];
}

const initialState: ProductGroupState = {
  loading: "pending",
  error: "",
  productGroup: [],
};

export const productGroupSlice = createSlice({
  name: "productGroup",
  initialState,
  reducers: {
    addGroup: (state, action: PayloadAction<IGroup>) => {
      state.productGroup.push(action.payload);
    },
    removeGroup: (state, action: PayloadAction<string | number>) => {
      state.productGroup = state.productGroup.filter(
        (group) => group.id !== action.payload
      );
    },
    addProduct: (
      state,
      action: PayloadAction<{ groupId: string | number; product: IProduct }>
    ) => {
      const { groupId, product } = action.payload;
      const group = state.productGroup.find((group) => group.id === groupId);
      if (group) {
        group.products.push(product);
      }
    },
    removeProduct: (
      state,
      action: PayloadAction<{
        groupId: string | number;
        productId: string | number;
      }>
    ) => {
      const { groupId, productId } = action.payload;
      const group = state.productGroup.find((group) => group.id === groupId);
      if (group) {
        group.products = group.products.filter(
          (product) => product.id !== productId
        );
      }
    },
    updateProduct: (
      state,
      action: PayloadAction<{
        groupId: string | number;
        productId: string | number;
        product: Partial<IProduct>;
      }>
    ) => {
      const { groupId, productId, product } = action.payload;
      const groupIndex = state.productGroup.findIndex(
        (group) => group.id === groupId
      );
      if (groupIndex !== -1) {
        const productIndex = state.productGroup[groupIndex].products.findIndex(
          (p) => p.id === productId
        );
        if (productIndex !== -1) {
          state.productGroup[groupIndex].products[productIndex] = {
            ...state.productGroup[groupIndex].products[productIndex],
            ...product,
          };
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<IGroup[]>) => {
          state.loading = "succeeded";
          state.productGroup = action.payload;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Произошла ошибка";
      });
  },
});

export const {
  addGroup,
  removeGroup,
  addProduct,
  removeProduct,
  updateProduct,
} = productGroupSlice.actions;
export const ProductGroupState = (state: RootState) => state.productGroup;
export default productGroupSlice.reducer;
