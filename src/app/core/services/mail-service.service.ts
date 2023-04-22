import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cons } from '@conf/constants';

import { Correo } from "@core/models/correo";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) {}

  createTransport(correo: Correo) {
    const url: string = cons.http + '//' + cons.backend + cons.api + '/correos/createTransport';
    return this.http.post(url, correo).subscribe(data => {
      console.log(data);
    });
  }
}
