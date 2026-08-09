import { Component } from '@angular/core';
import { IconComponent } from '../icons/icons';
import { TechIconComponent } from '../tech-icon/tech-icon';
import { TECH_BACKEND, TECH_FRONTEND } from '../../shared/portifolio-data';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [IconComponent, TechIconComponent],
  templateUrl: './tech.html',
})
export class TechComponent {
  readonly frontend = TECH_FRONTEND;
  readonly backend = TECH_BACKEND;
}
