import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { usuarios as actions } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuarios')
      .subscribe(result => {
        this.usuarios = result.users;
        this.loading = result.loading;
        this.error = result.error;
      });
    this.store.dispatch(new actions.CargarUsuarios());
  }

}
