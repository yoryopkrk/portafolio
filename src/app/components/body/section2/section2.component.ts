import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  experiences = [
    {
      company: 'SIGMA S.A. Chile',
      role: 'Desarrollador de software',
      period: 'Mayo 2022 - presente',
      location: 'Gran Santiago, Chile',
      bullets: [
        'Desarrollo e implementación de soluciones web y de escritorio para gestión empresarial.',
        'Diseño y optimización de bases de datos MySQL y PostgreSQL para información crítica.',
        'Integración de servicios RESTful y microservicios en arquitecturas escalables.',
        'Automatización de flujos internos y reducción de tiempos operativos.'
      ]
    },
    {
      company: 'SIDTEC',
      role: 'Desarrollador de software',
      period: 'Julio 2021 - mayo 2022',
      location: 'Santiago, Chile',
      bullets: [
        'Aplicaciones personalizadas en Angular y Node.js para clientes industriales.',
        'Reportes dinámicos y dashboards interactivos para visualización de datos.',
        'Soporte correctivo y preventivo en proyectos productivos bajo metodologías Scrum.'
      ]
    },
    {
      company: 'DUES Ltda',
      role: 'Desarrollador web',
      period: 'Noviembre 2020 - julio 2021',
      location: 'Santiago, Chile',
      bullets: [
        'Sitios web y plataformas internas con PHP, JavaScript y MySQL.',
        'Interfaces responsivas con HTML5, CSS3 y Bootstrap.',
        'Optimización de carga, mejoras de usabilidad y levantamiento directo con clientes.'
      ]
    },
    {
      company: 'Funeraria Ibáñez / Farmacias Ahumada',
      role: 'Prácticas TI y desarrollo',
      period: '2019 - 2020',
      location: 'Santiago, Chile',
      bullets: [
        'Módulos de gestión interna en PHP, formularios electrónicos y digitalización de procesos.',
        'Soporte a sistemas internos, bases de datos, reportes e incidencias de usuarios.'
      ]
    }
  ];
}
