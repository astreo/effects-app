import { Usuario } from '../../models/usuario.model';
import {usuarios as actions} from '../actions';


export interface State {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: State = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function reducer(state = estadoInicial, action: actions.accion): State {
  switch (action.type) {
    case actions.CARGAR_USUARIOS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actions.CARGAR_USUARIOS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.usuarios]
      };

    case actions.CARGAR_USUARIOS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
