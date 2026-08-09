import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Envelope } from '@primeicons/angular/envelope';
import { Github } from '@primeicons/angular/github';
import { Linkedin } from '@primeicons/angular/linkedin';
import { Send } from '@primeicons/angular/send';
import { CONTACT } from '../../shared/portifolio-data';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [Envelope, Github, Linkedin, Send, ReactiveFormsModule],
  templateUrl: './contato.html',
})
export class ContatoComponent {
  readonly contact = CONTACT;
  readonly submitted = signal(false);

  private readonly fb = new FormBuilder();

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Sem backend: apenas simula o envio da mensagem.
    this.submitted.set(true);
    this.form.reset();

    setTimeout(() => this.submitted.set(false), 4000);
  }
}
