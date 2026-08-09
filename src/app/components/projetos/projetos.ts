import { Component } from '@angular/core';
import { IconComponent } from '../icons/icons';
import { PROJECTS } from '../../shared/portifolio-data';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './projetos.html',
})
export class ProjetosComponent {
  readonly projects = PROJECTS;
}
