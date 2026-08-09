import { Component } from '@angular/core';
import { IconComponent } from '../icons/icons';
import { HERO, SOCIAL_LINKS } from '../../shared/portifolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './hero.html',
})
export class HeroComponent {
  readonly hero = HERO;
  readonly socialLinks = SOCIAL_LINKS;
}
