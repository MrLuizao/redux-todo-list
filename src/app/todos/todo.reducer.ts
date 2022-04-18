import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from "./models/todo.model";


export const estadoInicial: Todo[] = [
    new Todo ('INITIAL STATE by LVR!')
];


const _todoReducer = createReducer(estadoInicial,
    on( crear, (state, { texto }) => [...state, new Todo( texto )] ),
)

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}