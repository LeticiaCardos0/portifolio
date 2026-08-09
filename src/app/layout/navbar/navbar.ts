import { Component, inject, signal } from '@angular/core';
import { Bars } from '@primeicons/angular/bars';
import { Briefcase } from '@primeicons/angular/briefcase';
import { Code } from '@primeicons/angular/code';
import { Envelope } from '@primeicons/angular/envelope';
import { Moon } from '@primeicons/angular/moon';
import { Sun } from '@primeicons/angular/sun';
import { Times } from '@primeicons/angular/times';
import { User } from '@primeicons/angular/user';
import { NAV_LINKS, SITE_NAME } from '../../shared/portifolio-data';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [User, Briefcase, Code, Envelope, Sun, Moon, Times, Bars],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);

  readonly siteName = SITE_NAME;
  readonly navLinks = NAV_LINKS;
  readonly menuOpen = signal(false);
  readonly theme = this.themeService.theme;

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleTheme() {
    this.themeService.toggle();
  }
}
