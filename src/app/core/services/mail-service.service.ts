import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Correo } from "@core/models/correo";
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(
    private http: HttpClient
  ) {}

  createTransport(correo: Correo) {
    const url: string = `${environment.apiUrl}/correos/createTransport`;
    return this.http.post(url, correo).subscribe((data: any) => {
      console.log(data);
    });
  }
}
