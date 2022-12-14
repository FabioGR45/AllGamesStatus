import { GameService } from './../../services/game.service';

import Game from 'src/app/models/Game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit{

  gameList: Game[] = [];

  constructor(private gameService: GameService){ }

  ngOnInit(): void{
    this.gameList = this.gameService.getGames();
    console.log("Game List was born!");
  }

}