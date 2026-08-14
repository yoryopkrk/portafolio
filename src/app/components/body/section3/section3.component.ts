import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectAreas = [
    {
      title: 'Sistemas de gestion empresarial',
      description: 'Aplicaciones web y de escritorio para centralizar operaciones, flujos internos y seguimiento de informacion critica.',
      stack: ['Angular', 'Node.js', 'SQL Server', 'REST APIs']
    },
    {
      title: 'Dashboards y reportes dinamicos',
      description: 'Visualizacion de datos para equipos operativos, con reportes interactivos y consultas optimizadas.',
      stack: ['Angular', 'Chart.js', 'ApexCharts', 'SQL']
    },
    {
      title: 'Automatizacion e integraciones',
      description: 'Microservicios, integraciones RESTful y mejoras continuas para reducir tareas manuales y tiempos operativos.',
      stack: ['NestJS', 'TypeORM', 'JWT', 'GKE']
    }
  ];

  skills = [
    'Angular',
    'Node.js',
    'NestJS',
    'TypeScript',
    'JavaScript',
    'PHP',
    'SQL Server',
    'MySQL',
    'PostgreSQL',
    'Bootstrap',
    'RESTful APIs',
    'Microservicios',
    'Google Cloud Platform (GCP)',
    'Google Kubernetes Engine',
    'Scrum'
  ];

  certifications = [
    'Curso de NestJS: Autenticacion con Passport y JWT',
    'Curso de NestJS: Persistencia de Datos con TypeORM',
    'Curso de Angular Router: Lazy Loading y Programacion Modular',
    'Curso de NestJS: Programacion Modular, Swagger y Deploy',
    'Crea sistemas POS Inventarios y ventas con PHP 8 y AdminLTE'
  ];
}
