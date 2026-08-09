import { Component } from '@angular/core';
import { Github } from '@primeicons/angular/github';
import { Linkedin } from '@primeicons/angular/linkedin';
import { HERO, SOCIAL_LINKS } from '../../shared/portifolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Github, Linkedin],
  templateUrl: './hero.html',
})
export class HeroComponent {
  readonly hero = HERO;
  readonly socialLinks = SOCIAL_LINKS;
}
