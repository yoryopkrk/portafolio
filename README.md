# Portafolio — Jorge Sánchez Venegas

Sitio web personal desarrollado con Angular 22, desplegado en Cloudflare Pages.

## Stack

- **Angular 22** — framework principal (NgModules, lazy loading, reactive forms)
- **Bootstrap 5** — estilos y layout responsivo
- **RxJS** — manejo de observables en el formulario de contacto
- **Chart.js** — (dependencia instalada, disponible para visualizaciones)
- **SweetAlert2** — alertas y notificaciones de usuario
- **Prettier** — formateo de código

## Estructura

```
src/app/
├── components/body/        # Secciones del portafolio (hero, experiencia, proyectos, contacto, aplicaciones)
├── core/                   # Servicios (mail, contacto) y modelos
├── privacy-policy/         # Página de política de privacidad
├── not-found/              # Página 404
└── app-routing.module.ts   # Enrutamiento con lazy loading
```

## Desarrollo local

```bash
npm install
ng serve
# http://localhost:4200
```

## Build

```bash
ng build
# Artefactos en dist/portafolio/
```

## Deploy

El sitio se despliega automáticamente en **Cloudflare Pages** al hacer push a la rama `main`.

## Backend

El formulario de contacto consume una API propia en NestJS: [contacto-backend](https://github.com/yoryopkrk/contacto-backend)
