import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icons.html',
})
export class IconComponent {
  @Input() name = '';
  @Input() class = 'w-5 h-5';
}
