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
      title: 'Sistemas de gestión empresarial',
      description: 'Aplicaciones web y de escritorio para centralizar operaciones, flujos internos y seguimiento de información crítica.',
      stack: ['Angular', 'Node.js', 'MySQL', 'REST APIs']
    },
    {
      title: 'Dashboards y reportes dinámicos',
      description: 'Visualización de datos para equipos operativos, con reportes interactivos y consultas optimizadas.',
      stack: ['Angular', 'Chart.js', 'ApexCharts', 'SQL']
    },
    {
      title: 'Automatización e integraciones',
      description: 'Microservicios, integraciones RESTful y mejoras continuas para reducir tareas manuales y tiempos operativos.',
      stack: ['NestJS', 'TypeORM', 'JWT', 'GKE']
    }
  ];

  skills = [
    'Angular',
    'RxJS',
    'NgRx',
    'Node.js',
    'NestJS',
    'TypeScript',
    'JavaScript',
    'PHP',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'Docker Compose',
    'Bootstrap',
    'RESTful APIs',
    'Microservicios',
    'Git',
    'Prettier',
    'Cloudflare',
    'Supabase',
    'Render',
    'Resend',
    'Google Cloud Platform (GCP)',
    'Google Kubernetes Engine',
    'Scrum'
  ];

  certifications = [
    'Curso de NestJS: Autenticación con Passport y JWT',
    'Curso de NestJS: Persistencia de Datos con TypeORM',
    'Curso de Angular Router: Lazy Loading y Programación Modular',
    'Curso de NestJS: Programación Modular, Swagger y Deploy',
    'Crea sistemas POS Inventarios y ventas con PHP 8 y AdminLTE'
  ];
}
