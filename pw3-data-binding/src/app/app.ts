import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pw3-data-binding');
  frases: any = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distância entre duas pessoas.",
    "Deixe de lado as preocupações e seja feliz.",
    "Realize o óbvio, pense no improvável e conquiate o impossível."
  ]

  mensagem = "";
  img_biscoito = "biscoito.png";
  fechado: boolean = true;
  
  abrir(){
    if(this.fechado){
      this.fechado = false;
      this.img_biscoito = "quebrado.png";
    }
  }

  limpar(){
    if(!this.fechado){
      this.fechado = true;
      this.img_biscoito = "biscoito.png";
    }
  }
}
