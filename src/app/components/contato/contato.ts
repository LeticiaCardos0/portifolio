import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT } from '../../shared/portifolio-data';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contato.html',
})
export class ContatoComponent {
  readonly contact = CONTACT;

  private readonly fb = new FormBuilder();

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  enviarWhatsapp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, message } = this.form.getRawValue();
    const texto = `Olá, me chamo ${name} e ${message}`;
    const url = `https://wa.me/${this.contact.whatsapp}?text=${encodeURIComponent(texto)}`;

    const janela = window.open(url, '_blank', 'noopener,noreferrer');
    if (!janela) {
      // Pop-up bloqueado pelo navegador: navega na mesma aba como alternativa.
      window.location.href = url;
    }
  }
}
