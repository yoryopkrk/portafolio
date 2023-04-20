import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component implements OnInit {

  submitForm!: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.submitForm = this.fb.group({
      id: '',
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: '',
      comentario: ''
    });
  }

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  
  onSubmit() {
   // if (this.submitForm.invalid) { return; }

    const { nombre, correo, telefono, comentario } = this.submitForm.value;

    console.log('Nombre ', this.submitForm.value);
  }
}
