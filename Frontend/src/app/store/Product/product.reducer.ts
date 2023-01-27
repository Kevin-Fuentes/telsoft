import { createReducer, on } from '@ngrx/store';
import { Product } from '../../util/types/Producto';
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from './product.actions';

export const initialState: ReadonlyArray<Product> = [];

export const productReducer = createReducer(
  initialState,
  on(getProduct, (state, { products }: any) => {
    if (state.length === 0) {
      return [...state, ...products];
    }
    return state;
  }),
  on(deleteProduct, (state, { id }) => {
    const removeItem = state.filter((product: any) => product._id !== id);
    return [...removeItem];
  }),
  on(createProduct, (state, { product }: any) => [...[product], ...state]),
  on(updateProduct, (state, { product }: any) => {
    const stateMap = state.map((prod) => {
      if (prod._id === product._id) {
        return product;
      }
      return prod;
    });
    return stateMap;
  })
);
