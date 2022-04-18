import { createAction, props } from '@ngrx/store';

// export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
export type filtrosValidos = 'all' | 'completed' | 'pending';

export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{ filtro: filtrosValidos }>()
);

