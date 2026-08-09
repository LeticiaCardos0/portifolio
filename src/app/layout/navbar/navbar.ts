import { Component, signal } from '@angular/core';
import { IconComponent } from '../../components/icons/icons';
import { NAV_LINKS, SITE_NAME } from '../../shared/portifolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  readonly siteName = SITE_NAME;
  readonly navLinks = NAV_LINKS;
  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
