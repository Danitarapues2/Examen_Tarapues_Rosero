import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  messages: any[] = [];

  submitForm() {

    if (this.name.length < 5) {
      this.messages = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'El nombre debe tener al menos 5 letras.',
        },
      ];
      return
    }

    if (this.email.indexOf('@') === -1) {
      this.messages = [
        {
          severity: 'error',
          summary: 'Error',
          detail: 'El correo debe contener el símbolo @.',
        },
      ];
      return
    }

    if (this.message.length < 10) {
      this.messages = [{
        severity: 'error',
        summary: 'Error',
        detail: 'El mensaje debe tener al menos 10 caracteres.'
      },
      ];
      return;
    }

    if (
      !this.name ||
      !this.email ||
      !this.message
    ) {
      this.messages = [
        {
          severity: 'error',
          summary: 'Error',
          detail:
            'No se pudo enviar el formulario. Por favor, llena todos los campos.',
        },
      ];
      return;
    }

    console.log('Nombre:', this.name);
    console.log('Correo:', this.email);
    console.log('Mensaje:', this.message);
    console.log('Formulario enviado');

    this.name = '';
    this.email = '';
    this.message = '';

    this.messages = [
      {
        severity: 'success',
        summary: 'Éxito',
        detail: 'Formulario enviado con éxito.'
      },
    ];
  }
}
