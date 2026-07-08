import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cons } from '@conf/constants';
import { Usuario } from '../models/usuario';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) {}

  signIn(email: string, password: string) {
    const url = `${environment.apiUrl}/usuarios/signIn/${email}/${password}`;
    return this.http.get<Usuario[]>(url);
  }

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
