import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { usuario as acciones } from '../../store/actions';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  user: Usuario;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params
      .subscribe((params: any) => {
        const id = params.id;
        this.store.dispatch(new acciones.CargarUsuario(id));
      });

    this.store.select('usuario')
      .subscribe(result => {
        this.user = result.user;
        this.loading = result.loading;
        this.error = result.error;
      });
  }

}
