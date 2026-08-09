import { Component, Input } from '@angular/core';
import { IconComponent } from '../icons/icons';

interface Badge {
  label: string;
  bg: string;
  text: string;
}

const BADGES: Record<string, Badge> = {
  angular: { label: 'A', bg: 'bg-red-600', text: 'text-white' },
  typescript: { label: 'TS', bg: 'bg-blue-600', text: 'text-white' },
  javascript: { label: 'JS', bg: 'bg-yellow-400', text: 'text-black' },
  html: { label: '5', bg: 'bg-orange-600', text: 'text-white' },
  css: { label: '3', bg: 'bg-blue-500', text: 'text-white' },
  tailwind: { label: '~', bg: 'bg-cyan-500', text: 'text-white' },
  primeng: { label: 'P', bg: 'bg-emerald-600', text: 'text-white' },
  angularmaterial: { label: 'M', bg: 'bg-indigo-600', text: 'text-white' },
  git: { label: 'Git', bg: 'bg-orange-700', text: 'text-white' },
  github: { label: '', bg: 'bg-neutral-800', text: 'text-white' },
  mysql: { label: 'DB', bg: 'bg-sky-700', text: 'text-white' },
  java: { label: 'J', bg: 'bg-rose-700', text: 'text-white' },
  postman: { label: 'PM', bg: 'bg-orange-500', text: 'text-white' },
  figma: { label: 'F', bg: 'bg-fuchsia-600', text: 'text-white' },
};

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './tech-icon.html',
})
export class TechIconComponent {
  @Input() icon = '';

  get badge(): Badge {
    return BADGES[this.icon] ?? { label: '?', bg: 'bg-slate-600', text: 'text-white' };
  }
}
