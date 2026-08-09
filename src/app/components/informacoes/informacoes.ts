import { Component } from '@angular/core';
import { IconComponent } from '../icons/icons';
import { ABOUT, EXPERIENCE, LOCATION, STATUS } from '../../shared/portifolio-data';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './informacoes.html',
})
export class InformacoesComponent {
  readonly about = ABOUT;
  readonly status = STATUS;
  readonly location = LOCATION;
  readonly experience = EXPERIENCE;

  /** Grade de pontos decorativa (efeito "mapa em trama de pontos") */
  readonly mapDots: number[] = Array.from({ length: 48 }, (_, i) => i);

  dotX(i: number): number {
    return 16 + (i % 8) * 9;
  }

  dotY(i: number): number {
    return 8 + Math.floor(i / 8) * 9;
  }
}
