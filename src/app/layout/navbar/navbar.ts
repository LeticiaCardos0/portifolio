import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
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
  private readonly destroyRef = inject(DestroyRef);

  readonly siteName = SITE_NAME;
  readonly navLinks = NAV_LINKS;
  readonly menuOpen = signal(false);
  readonly theme = this.themeService.theme;

  /** Seção atualmente visível, usada para destacar o item correspondente na navbar. */
  readonly activeHref = signal(this.navLinks[0]?.href ?? '');

  constructor() {
    afterNextRender(() => this.observeSections());
  }

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  selectLink(href: string) {
    this.activeHref.set(href);
    this.closeMenu();
  }

  private observeSections(): void {
    const sections = this.navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) {
          return;
        }
        const topMost = visible.reduce((a, b) => (a.boundingClientRect.top <= b.boundingClientRect.top ? a : b));
        this.activeHref.set(`#${topMost.target.id}`);
      },
      // Considera "ativa" a seção que ocupa a faixa logo abaixo da navbar fixa.
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
