import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-filme',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-filme.html',
  styleUrl: './card-filme.css',
})
export class CardFilme {}
