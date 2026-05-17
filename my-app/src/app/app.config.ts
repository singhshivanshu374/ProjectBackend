import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // This line tells Angular to use Zone.js for change detection
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};