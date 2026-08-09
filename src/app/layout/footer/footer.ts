import { Component } from '@angular/core';
import { FOOTER_TEXT } from '../../shared/portifolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class FooterComponent {
  readonly footerText = FOOTER_TEXT;
}
