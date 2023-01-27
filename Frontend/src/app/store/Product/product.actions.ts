import { createAction, props } from '@ngrx/store';
import { Product } from '../../util/types/Producto';

export const getProduct = createAction(
  '[Product List/API] Get Product',
  props<{ products: ReadonlyArray<Product> }>()
);

export const createProduct = createAction(
  '[Product List] Create Product',
  props<{ product: Product }>()
);

export const updateProduct = createAction(
  '[Product List] Update Product',
  props<{ product: Product }>()
);

export const deleteProduct = createAction(
  '[Product List] Delete Product',
  props<{ id: String }>()
);
