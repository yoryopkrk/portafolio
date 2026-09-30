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
      description: 'Aplicación full stack de finanzas personales con manejo de estado centralizado en NgRx (actions, reducers, selectors) para el flujo de transacciones y la autenticación. Incluye rutas protegidas con guards, estadísticas visuales con Chart.js, autenticación vía Firebase Auth y backend propio en NestJS con TypeORM.',
      tech: ['Angular 20', 'Firebase', 'NgRx', 'Chart.js', 'Bootstrap', 'NestJS', 'TypeORM', 'Railway'],
      deployed: true,
      demoUrl: 'https://ingresos-egresos.yoryopkrk.cl',
      githubUrl: 'https://github.com/yoryopkrk/ingreso-egreso-app-4.0.0',
      backendGithubUrl: 'https://github.com/yoryopkrk/nestjs-auth-typeorm'
    },
    {
      name: 'Photo Gallery',
      description: 'Galería de fotos multiplataforma construida con Ionic y Capacitor: permite tomar fotos con la cámara del dispositivo (o subirlas desde el navegador), guardarlas localmente y administrarlas desde una interfaz común para web y móvil.',
      tech: ['Angular 17', 'Ionic', 'Capacitor', 'TypeScript'],
      deployed: true,
      demoUrl: 'https://photo-gallery.yoryopkrk.cl',
      githubUrl: 'https://github.com/yoryopkrk/photo-gallery-ionic'
    },
    {
      name: 'Portafolio personal',
      description: 'Este mismo sitio: portafolio desarrollado en Angular 22 con formulario de contacto funcional, sección de proyectos, experiencia laboral y política de privacidad. Desplegado en Cloudflare Pages con deploy automático desde GitHub.',
      tech: ['Angular 22', 'Bootstrap', 'RxJS', 'TypeScript', 'Cloudflare Pages'],
      deployed: true,
      demoUrl: 'https://yoryopkrk.cl',
      githubUrl: 'https://github.com/yoryopkrk/portafolio'
    },
    {
      name: 'Contacto Backend',
      description: 'API REST en NestJS que respalda el formulario de contacto del portafolio: guarda mensajes en PostgreSQL (Supabase) y envía emails con Resend. Incluye throttling por IP, validación con class-validator y rutas protegidas con API key.',
      tech: ['NestJS', 'TypeORM', 'PostgreSQL', 'Supabase', 'Resend', 'Render'],
      deployed: true,
      githubUrl: 'https://github.com/yoryopkrk/contacto-backend'
    },
    {
      name: 'Orbital Spheres',
      description: 'Juego arcade ambientado en el espacio, desarrollado con Phaser y TypeScript, con sistema de progresión (monedas y logros) y varias escenas de juego. Corre en el navegador y está preparado para empaquetarse como app móvil nativa vía Capacitor, pensando en su publicación en Google Play.',
      tech: ['TypeScript', 'Vite', 'Phaser', 'Capacitor'],
      deployed: true,
      demoUrl: 'https://orbital-spheres.yoryopkrk.cl'
    }
  ];
}
