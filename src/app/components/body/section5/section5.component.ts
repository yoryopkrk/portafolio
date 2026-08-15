import { Component, OnInit } from '@angular/core';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface DeployedApp {
  name: string;
  description: string;
  tech: string[];
  deployed: boolean;
  demoUrl?: string;
  githubUrl?: string;
  backendGithubUrl?: string;
}

@Component({
  standalone: false,
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faGithub = faGithub;

  apps: DeployedApp[] = [
    {
      name: 'Ingreso Egreso App',
      description: 'Aplicación full stack para el registro y control de ingresos y egresos, con gráficos de resumen, autenticación de usuarios vía Firebase y backend propio desplegado en Railway.',
      tech: ['Angular 20', 'Firebase', 'NgRx', 'Chart.js', 'Bootstrap', 'NestJS', 'TypeORM', 'Railway'],
      deployed: true,
      demoUrl: 'https://ingresos-egresos.yoryopkrk.cl',
      githubUrl: 'https://github.com/yoryopkrk/ingreso-egreso-app-4.0.0',
      backendGithubUrl: 'https://github.com/yoryopkrk/nestjs-auth-typeorm'
    },
    {
      name: 'Photo Gallery',
      description: 'Galería de fotos multiplataforma para capturar, almacenar y administrar imágenes desde el navegador o dispositivos móviles.',
      tech: ['Angular 17', 'Ionic', 'Capacitor', 'TypeScript'],
      deployed: true,
      demoUrl: 'https://photo-gallery.yoryopkrk.cl',
      githubUrl: 'https://github.com/yoryopkrk/photo-gallery-ionic'
    },
    {
      name: 'Orbital Spheres',
      description: 'Juego web construido con Phaser, preparado para empaquetarse como app móvil nativa vía Capacitor.',
      tech: ['TypeScript', 'Vite', 'Phaser', 'Capacitor'],
      deployed: true,
      demoUrl: 'https://orbital-spheres.yoryopkrk.cl'
    }
  ];
}
