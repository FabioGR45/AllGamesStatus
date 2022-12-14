import { Component, Input, OnChanges } from '@angular/core';

import { GameService } from './../../../services/game.service';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnChanges{

  @Input() game?: Game;

  // @Input() game: Game = {
  //   id: 0,
  //   title: "Jogo não especificado",
  //   description: "Sem descrição",
  //   releaseDate: new Date(),
  //   price: 0,
  //   promotion: false
  // }

  constructor(private gameService: GameService) {
    // this.task.title = "Tarefa Não Especificada";
    // this.task.description = "Sem descrição";
    // this.task.dueDate = new Date();
    // this.task.status = false;
  }

  ngOnInit() {
    console.log(`Task List Item com id = ${this.game?.id}!`);
  }

  changeStatus(): void {
    if (this.game) this.game.promotion = !this.game?.promotion;
  }

  deleteItem() {
    if (this.game) this.gameService.deleteGame(this.game.id);
  }

  ngOnChanges(): void {
    console.log('Game List Item has changed!');
  }

}
