import { Component, Input } from '@angular/core';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {

  @Input() game: Game = {
    title: "Jogo não especificado",
    description: "Sem descrição",
    releaseDate: new Date(),
    price: 0,
    promotion: false
  }
}
