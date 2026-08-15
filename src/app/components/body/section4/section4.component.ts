import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { faArrowUpRightFromSquare, faCircleCheck, faTimesCircle, faSpinner, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactoService } from '@services/contacto.service';
import { MailService } from '@services/mail-service.service';

@Component({
  standalone: false,
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  submitForm!: FormGroup;
  mensaje: string = '';
  huboError: boolean = false;
  cargando: boolean = false;

  constructor(
    public fb: FormBuilder,
    private contactoService: ContactoService,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      id: '',
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: '',
      comentario: ['', Validators.required]
    });
  }

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faCircleCheck = faCircleCheck;
  faTimesCircle = faTimesCircle;
  faSpinner = faSpinner;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  
  onSubmit() {
    if (this.submitForm.invalid) { return; }

    const { nombre, correo, telefono, comentario } = this.submitForm.value;

    let email = 'jor.sanchezv.90@gmail.com';

    let infoCorreo = {
      cualNotificacion: 0,
      nombre: nombre,
      email: email,
      mensaje: comentario
    }

    let correoRespuesta = {
      cualNotificacion: 1,
      nombre: nombre,
      email: correo
    }

    let correoObj = {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      comentario: comentario,
      origen: 'portafolio',
      leido: 0,
      id_tipo_notificacion: 0
    }

    this.cargando = true;
    this.mensaje = '';
    this.huboError = false;

    forkJoin([
      this.mailService.createTransport(infoCorreo),
      this.mailService.createTransport(correoRespuesta),
      this.contactoService.postContacto(correoObj)
    ]).subscribe({
      next: () => {
        this.cargando = false;
        this.mensaje = 'Mensaje enviado correctamente';
        this.submitForm.reset();

        setTimeout(() => {
          this.mensaje = '';
        }, 3000);
      },
      error: () => {
        this.cargando = false;
        this.huboError = true;
        this.mensaje = 'No se pudo enviar el mensaje. Intenta nuevamente o escribeme directo a mi correo.';
      }
    });
  }
}
