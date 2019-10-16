import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  usuarios: reducers.usuarios.State;
  usuario: reducers.usuario.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: reducers.usuarios.reducer,
  usuario: reducers.usuario.reducer
};
