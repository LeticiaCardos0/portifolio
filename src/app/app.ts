import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./layout/footer/footer";
import { NavbarComponent } from './layout/navbar/navbar';
import { ProjetosComponent } from "./components/projetos/projetos";
import { HeroComponent } from './components/hero/hero';
import { InformacoesComponent } from './components/informacoes/informacoes';
import { ContatoComponent } from './components/contato/contato';
import { TechComponent } from './components/tech/tech';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, NavbarComponent,ProjetosComponent,ContatoComponent,HeroComponent,InformacoesComponent,TechComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portifolio');
}
