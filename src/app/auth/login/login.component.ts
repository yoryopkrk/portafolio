import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsuarioService } from '@services/usuario.service';
import { AlertasService } from '@services/alertas.service';

import { Usuario } from "@models/usuario";

import { faArrowUpRightFromSquare, faCheckCircle, faTimesCircle, faSpinner, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  cargando: boolean = false;
  loginForm!: FormGroup;
  datosUsuario: any = [];
  showPassword: boolean = false;
  input: string = 'password';
  token: string = '';
  subscriptionUser: Subscription = new Subscription;
  subscriptionLogin: Subscription = new Subscription;
  subscriptionUserId: Subscription = new Subscription;
  subscriptionUserRol: Subscription = new Subscription;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private alertasService: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {
    sessionStorage.clear();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(24)]],
    });
  }

  ngOnDestroy() {
    this.subscriptionLogin.unsubscribe();
    this.subscriptionUser.unsubscribe();
    this.subscriptionUserId.unsubscribe();
    this.subscriptionUserRol.unsubscribe();
  }

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;
  faSpinner = faSpinner;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.input = this.showPassword ? 'text' : 'password';
  }

  usuarioLogueado: any = [];
  login() {
    //localStorage.clear();
    if (this.loginForm.invalid) { return; }

    const { email, password } = this.loginForm.value;
    const loginUsuario = this.usuarioService.signIn(email, password);
    this.subscriptionLogin = loginUsuario.subscribe((usuario: Usuario[]) => {
      this.usuarioLogueado = usuario;
      this.validaLogin(usuario);
    });
  }

  validaLogin(usuario: any) {
    if (usuario.entity !== null && usuario.entity.estado !== false) {
      this.usuarioService.saveSessionStorage(
        'uid',
        usuario.entity.email,
        usuario.entity.estado,
        usuario.entity.rut,
        usuario.entity.descripcion,
        'usuario.entity.Roles[0].id',
        usuario.entity.id,
        'usuario.entity.Roles[0].Permisos',
        'slugPermisos',
        'usuario.entity.Roles[0].descripcion'
      );

      this.router.navigate(['dashboard']);
    } else {
      if (usuario.entity === null) {
        let mensaje = usuario.message + ', ingrese los datos nuevamente.';
        this.alertasService.msgError(mensaje);
      } else {
        if (usuario.entity.estado === false) {
          let mensaje = 'El usuario ingresado está deshabilitado, comuníquese con el administrador.';
          this.alertasService.msgError(mensaje);
        }
      }
    }
  }
}
