import { Component } from '@angular/core';
import { CardFilme } from "../card-filme/card-filme";
import { Container } from "../container/container";
import { Filme } from '../../../core/model/filme';

@Component({
  selector: 'app-em-cartaz',
  imports: [CardFilme, Container],
  templateUrl: './em-cartaz.html',
  styleUrl: './em-cartaz.css',
})
export class EmCartaz {
  filmes: Filme[] = [
    {id: 1, nome: 'Toy Story 5', duracao: 105, genero: 'ANIMACAO', classificacao: 'LIVRE', ano: 2026, capa: 'https://ingresso-a.akamaihd.net/prd/img/movie/toy-story-5/709f36bd-9b92-49ab-8046-677758834769.webp', diretor: 'Pete Docter', elenco: 'Tom Hanks, Tim Allen, Annie Potts, Tony Hale', descricao: 'Woody e Buzz embarcam em uma nova aventura que testa os limites da amizade e da imaginação.', avaliacao: 9.2 },
    {id: 2, nome: 'The Batman: Parte II', duracao: 160, genero: 'ACAO', classificacao: 'A14', ano: 2027, capa: 'https://www.quadrorama.com.br/imagens/quadro-decorativo/?quadro=2024/08/117-1.png', diretor: 'Matt Reeves', elenco: 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell', descricao: 'Batman continua sua luta para limpar Gotham enquanto enfrenta novas ameaças e dilemas morais mais sombrios que nunca.', avaliacao: 9.0 },
    {id: 2, nome: 'Homem-Aranha: Um novo dia', duracao: 174, genero: 'ACAO', classificacao: 'A16', ano: 2026, capa: 'https://preview.redd.it/spider-man-brand-new-day-fan-poster-v0-me4790e4ddof1.jpeg?auto=webp&s=3e11c1480a180b1ca54c21e7a5db4314baca55e4', diretor: 'Destin Daniel', elenco: 'Tom Holland, Zendaya, Jon Bernthal, Sadie Sink', descricao: 'Peter Parker vive solitário e esquecido por todos. Focado em ser o herói em tempo integral, ele enfrenta uma misteriosa ameaça urbana que o leva ao limite físico e mental, forçando-o a lidar com as consequências de seu passado.', avaliacao: 9.0 }
  ];
}
