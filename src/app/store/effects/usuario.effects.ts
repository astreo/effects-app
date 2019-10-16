import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {usuario as actions} from '../actions';
import { of, pipe } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';


@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions, public usuariosService: UsuarioService
  ) { }

  @Effect()
  cargarUsuario$ = this.actions$
    .pipe(
      ofType(actions.CARGAR_USUARIO),
      pipe(
        switchMap((action: actions.CargarUsuario) => {
          console.log(action.id);
          return this.usuariosService.getUserById(action.id)
            .pipe(
              map(user => new actions.CargarUsuarioSuccess(user)),
              catchError(error => of(new actions.CargarUsuarioFail(error)))
            );
        })
      )
    );
}
