import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio {
  }
