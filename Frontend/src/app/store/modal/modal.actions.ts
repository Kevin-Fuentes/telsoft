import { createAction, props } from '@ngrx/store';

export const open = createAction('[Modal Component] Open',props<{ modal: Object}>());
export const close = createAction('[Modal Component] Close', props<{ modal: Object}>());

