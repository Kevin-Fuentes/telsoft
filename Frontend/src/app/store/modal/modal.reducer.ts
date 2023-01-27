import { createReducer, on, props } from '@ngrx/store';
import { open, close } from './modal.actions';

export const initialState = { display: 'none', id: '' };

export const modalReducer = createReducer(
  initialState,
  on(open, (state, { modal }: any) => {
    return { display: modal.display, id: modal.id };
  }),
  on(close, (state, { modal }: any) => {
    return { display: modal.display, id: modal.id };
  })
);
