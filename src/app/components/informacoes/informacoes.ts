import { Component } from '@angular/core';
import { ABOUT, EXPERIENCE, LOCATION, STATUS } from '../../shared/portifolio-data';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './informacoes.html',
})
export class InformacoesComponent {
  readonly about = ABOUT;
  readonly status = STATUS;
  readonly location = LOCATION;
  readonly experience = EXPERIENCE;
}