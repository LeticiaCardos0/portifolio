import { Component } from '@angular/core';
import { Code } from '@primeicons/angular/code';
import { TECH_BACKEND, TECH_FRONTEND } from '../../shared/portifolio-data';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [Code],
  templateUrl: './tech.html',
})
export class TechComponent {
  readonly frontend = TECH_FRONTEND;
  readonly backend = TECH_BACKEND;
}