import {Injectable} from '@angular/core';
import {ContactForm} from "../model/contact-form";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() {
  }

  enviarMensaje(contacto: ContactForm): void {
    console.log('***************************************************************')
    console.log('Enviando mensaje.... ๐งช')
    console.log(JSON.stringify(contacto));
    console.log('๐๐ Mensaje enviado')
    console.log('***************************************************************')
  }

}
