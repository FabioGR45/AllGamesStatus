import { Injectable } from '@angular/core';

import Game from 'src/app/models/Game';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameList: Game[] = [
    {
      id: 1,
      title: "Terraria",
      description: "Minecraft 2D",
      releaseDate: new Date(),
      price: 19.99,
      promotion: true
    },
    {
      id: 2,
      title: "Grand Theft Auto IV",
      description: "GTA 4 > GTA 5",
      releaseDate: new Date(),
      price: 52,
      promotion: false
    },
    {
      id: 3,
      title: "Key: Maze of Illusions",
      description: "Melhor jogo",
      releaseDate: new Date(),
      price: 8,
      promotion: false
    },
    {
      id: 4,
      title: "Stardew Valley",
      description: "Perfeito, mas Harvest Moon ainda é melhor pela nostalgia (Back to nature e A Wonderful Life, só)",
      releaseDate: new Date(),
      price: 24.99,
      promotion: false
    }
  ];

  constructor() { 
    // Game.updateLastId(this.gameList[this.gameList.length-1].id);
  }

  getGames(): Game[]{

    return this.gameList;

  }

  postGame(newGame: Game): void {

    this.gameList.push(newGame);

  }

  updateGame(){

  }

  deleteGame(id: number){
    const index = this.gameList.findIndex((game) => game.id == id);
    this.gameList.splice(index, 1);
  }
}
