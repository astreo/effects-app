import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {usuarios as actions} from '../actions';
import { of, pipe } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';


@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions, public usuariosService: UsuarioService
  ) { }

  @Effect()
  cargarUsuarios$ = this.actions$
    .pipe(
      ofType(actions.CARGAR_USUARIOS),
      pipe(
        switchMap(() => {
          return this.usuariosService.getUsers()
            .pipe(
              map(users => new actions.CargarUsuariosSuccess(users)),
              catchError(error => of(new actions.CargarUsuariosFail(error)))
            );
        })
      )
    );

}
