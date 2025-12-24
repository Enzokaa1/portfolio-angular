import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  templateUrl: './projetos.html',
  styleUrls: ['./projetos.css'],
})
export class Projetos {
  projetos = [
    {
      nome: 'BenePark',
      descricao: 'Aplicativo de denúncias e recompensas',
      tecnologias: ['Angular', 'TypeScript'],
    },
    {
      nome: 'FinFlow',
      descricao: 'Gestor financeiro com uso de API e banco de dados',
      tecnologias: ['Angular', 'MongoDB'],
    },
  ];
}
