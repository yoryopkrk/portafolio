import { Component, OnInit } from '@angular/core';

import { faArrowUpRightFromSquare, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  standalone: false,
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})
export class Section1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  highlights = [
    'Desarrollo web full stack con Angular, Node.js y NestJS.',
    'Experiencia en sistemas empresariales, reportes, dashboards y automatizacion.',
    'Bases de datos MySQL y PostgreSQL, integraciones RESTful y microservicios escalables.',
    'Contenerización con Docker y Docker Compose: dockerización de frontend y backend, orquestación de servicios en local y producción.'
  ];

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faLocationDot = faLocationDot;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
