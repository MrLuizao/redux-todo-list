import { createReducer, on } from '@ngrx/store';
import { crear, editar, toggle, borrar, toggleAll, limpiarTodos } from './todo.actions';
import { Todo } from "./models/todo.model";


export const estadoInicial: Todo[] = [];


const _todoReducer = createReducer(estadoInicial,
    on( crear, (state, { texto }) => [...state, new Todo( texto )] ),

    on(toggle, (state, { id }) => {
    
        return state.map( todo => {
    
          if ( todo.id === id  ) {
            return {
              ...todo,
              completado: !todo.completado
            }
          } else {
            return todo;
          }
    
        });
    }),

    on(editar, (state, { id, texto }) => {

    return state.map( todo => {

        if ( todo.id === id  ) {
        return {
            ...todo,
            texto: texto
        }
        } else {
        return todo;
        }

    });
    }),

    on (borrar, ( state, { id } ) =>  state.filter( todo => todo.id !== id ) ),

    on (toggleAll, ( state, { completado } ) => state.map( todo => {
        return {
          ...todo,
          completado: completado
        }
    }) ),

    on(limpiarTodos, state =>  state.filter( todo => !todo.completado )  ),
)

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}