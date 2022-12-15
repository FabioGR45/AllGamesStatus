import { Component, Input, OnChanges, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { GameService } from './../../../services/game.service';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnChanges{

  @Input() game?: Game;

  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;

  // @Input() game: Game = {
  //   id: 0,
  //   title: "Jogo não especificado",
  //   description: "Sem descrição",
  //   releaseDate: new Date(),
  //   price: 0,
  //   promotion: false
  // }

  constructor(private gameService: GameService, public dialog: MatDialog) {
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

  openDialog() {
    if (this.dialogTemplate) {
      this.dialog.open(this.dialogTemplate, {
        data: { title: "Atualizar jogo" }
      });
    }
  }
  
  ngOnChanges(): void {
    console.log('Game List Item has changed!');
  }

}
