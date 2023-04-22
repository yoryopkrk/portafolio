import { Injectable } from '@angular/core';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor() { }

  msgValidate(titulo: any, mensaje: any) {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: mensaje
    });
  }

  msgSuccess(titulo: any, mensaje: any) {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: mensaje
    });
  }

  msgError(mensaje: any) {
    Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido un error',
      text: mensaje
    });
  }

  msgValidaEstado(titulo: any, mensaje: any) {
    Swal.fire({
      icon: 'warning',
      title: titulo,
      text: mensaje
    });
  }
}
