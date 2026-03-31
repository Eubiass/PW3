import { Component } from '@angular/core';
import { CardFilme } from "../card-filme/card-filme";

@Component({
  selector: 'app-em-cartaz',
  imports: [CardFilme],
  templateUrl: './em-cartaz.html',
  styleUrl: './em-cartaz.css',
})
export class EmCartaz {}
