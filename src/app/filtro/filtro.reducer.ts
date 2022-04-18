
   
import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFiltro } from './filtro.actions';

// export const initialState: filtrosValidos = 'todos'
export const initialState = 'all'

const _filtroReducer = createReducer(initialState,
  on( setFiltro , ( state, { filtro } ) => filtro ),

);

export function filtroReducer(state: string, action: Action) {
  return _filtroReducer(state, action);
}