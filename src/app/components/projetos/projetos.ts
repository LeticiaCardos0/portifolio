import { Component } from '@angular/core';
import { ExternalLink } from '@primeicons/angular/external-link';
import { Github } from '@primeicons/angular/github';
import { PROJECTS } from '../../shared/portifolio-data';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ExternalLink, Github],
  templateUrl: './projetos.html',
})
export class ProjetosComponent {
  readonly projects = PROJECTS;
}
