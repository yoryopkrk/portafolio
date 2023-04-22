import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cons } from '@conf/constants';

import { Contacto } from "../models/contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(
    private http: HttpClient
  ) {}

  getContactos() {
    const url = cons.http + '//' + cons.backend + cons.api + `/contactos/getContactos`; // + '?page=' + page + '&q=' + search;
    return this.http.get<Contacto[]>(url);
  }

  allContactos() {
    const url = cons.http + '//' + cons.backend + cons.api + `/contactos/allContactos`;
    return this.http.get<Contacto[]>(url);
  }

  getContacto(id: number) {
    const url = cons.http + '//' + cons.backend + cons.api + `/contactos/getContacto/` + id;
    return this.http.get<Contacto[]>(url);
  }

  postContacto(contacto: Contacto) {
    const url: string = cons.http + '//' + cons.backend + cons.api + '/contactos/postContacto';
    return this.http.post(url, contacto).subscribe(data => {
      console.log(data);
    });
  }

  putContacto(contacto: Contacto, id: number) {
    const url: string = cons.http + '//' + cons.backend + cons.api + '/contactos/putContacto/' + id;
    return this.http.put(url, contacto).subscribe(data => {
      console.log(data);
    });
  }

  deleteContacto(id: number) {
    const url = cons.http + '//' + cons.backend + cons.api + `/contactos/deleteContacto/` + id;
    return this.http.delete(url).subscribe(data => {
      console.log(data);
    });
  }
}
