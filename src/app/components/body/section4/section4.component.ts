import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  cargando: boolean = false;

  constructor(
    public fb: FormBuilder,
    private contactoService: ContactoService,
    private mailService: MailService
  ) { }

  ngOnInit(): void {
    this.submitForm = this.fb.group({
  standalone: false,
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
      leido: 0,
      id_tipo_notificacion: 0
    }

    if (infoCorreo) {
      this.mensaje = 'Mensaje enviado correctamente';

      this.mailService.createTransport(infoCorreo);
      this.contactoService.postContacto(correoObj);
      this.mailService.createTransport(correoRespuesta);

      setTimeout(() => {
        this.mensaje = '';
        this.submitForm.reset();
      }, 1500);
    }
  }
}
