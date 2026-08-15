import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cons } from '@conf/constants';

import { Contacto } from "../models/contacto";
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(
    private http: HttpClient
  ) {}

  getContactos() {
    const url = `${environment.apiUrl}/contactos/getContactos`; // + '?page=' + page + '&q=' + search;
    return this.http.get<Contacto[]>(url);
  }

  allContactos() {
    const url = `${environment.apiUrl}/contactos/allContactos`;
    return this.http.get<Contacto[]>(url);
  }

  getContacto(id: number) {
    const url = `${environment.apiUrl}/contactos/getContacto/${id}`;
    return this.http.get<Contacto[]>(url);
  }

  postContacto(contacto: Contacto) {
    const url: string = `${environment.apiUrl}/contactos/postContacto`;
    return this.http.post(url, contacto);
  }

  putContacto(contacto: Contacto, id: number) {
    const url: string = `${environment.apiUrl}/contactos/putContacto/${id}`;
    return this.http.put(url, contacto).subscribe((data: any)  => {
      console.log(data);
    });
  }

  deleteContacto(id: number) {
    const url = `${environment.apiUrl}/contactos/deleteContacto/${id}`;
    return this.http.delete(url).subscribe((data: any)  => {
      console.log(data);
    });
  }
}
