import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cons } from '@conf/constants';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) {}

  signIn(email: string, password: string) {
    const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/signIn/` + email + '/' + password;
    return this.http.get<Usuario[]>(url);
  }

  // allUsuarios() {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/allUsuarios`;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuarios(page: number, search: string, rol: number, escuela: number) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getUsuarios/` + '?page=' + page + '&q=' + search + '&rol=' + rol + '&escuela=' + escuela;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuario(id: number) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getUsuario/` + id;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getPermisosUsuario(id: number) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getPermisosUsuario/` + id;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuarioForEmail(email: string) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getUsuarioForEmail/` + email;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuariosRolesPermisosEscuelasAsignaturas() {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getUsuariosRolesPermisosEscuelasAsignaturas`;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuarioRolPermisoEscuelaAsignatura(email: string) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getUsuarioRolPermisoEscuelaAsignatura/` + email;
  //   return this.http.get<Usuario[]>(url);
  // }

  // canActivateUser(email: string) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/canActivateUser/` + email;
  //   return this.http.get<Usuario[]>(url);
  // }

  // getUsuarioPorRut(rut: string) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/getUsuarioPorRut/` + rut;
  //   return this.http.get<Usuario[]>(url);
  // }

  // postUsuario(usuario: Usuario) {
  //   const url: string = cons.http + '//' + cons.backend + cons.api + '/usuarios/postUsuario';
  //   return this.http.post(url, usuario).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // putUsuario(usuario: Usuario, id: number) {
  //   const url = cons.http + '//' + cons.backend + cons.api + '/usuarios/putUsuario/' + id;
  //   return this.http.put(url, usuario).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // deleteUsuario(id: number) {
  //   const url = cons.http + '//' + cons.backend + cons.api + `/usuarios/deleteUsuario/` + id;
  //   return this.http.delete(url).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  public saveSessionStorage(uid?: string, email?: any, estado?: string, rut?: string, descripcion?: string, roles?: string, id?: string, permisos?: any, slugPermisos?: any, descripcionRol?: any) {
    sessionStorage.setItem('uid', uid!);
    sessionStorage.setItem('email', email!);
    sessionStorage.setItem('estado', estado!);
    sessionStorage.setItem('rut', rut!);
    sessionStorage.setItem('descripcion', descripcion!);
    sessionStorage.setItem('roles', roles!);
    sessionStorage.setItem('id', id!);
    sessionStorage.setItem('permisos', JSON.stringify(permisos!));
    sessionStorage.setItem('slugPermisos', JSON.stringify(slugPermisos!));
    sessionStorage.setItem('descripcionRol', JSON.stringify(descripcionRol!));
  }
}
