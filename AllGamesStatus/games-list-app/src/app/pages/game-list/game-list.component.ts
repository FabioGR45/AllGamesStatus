import Game from 'src/app/models/Game';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
    gameList: Game[] = [
      {
        title: "Terraria",
        description: "Minecraft 2D",
        releaseDate: new Date(),
        price: 19.99,
        promotion: true
      },
      {
        title: "Grand Theft Auto IV",
        description: "GTA 4 > GTA 5",
        releaseDate: new Date(),
        price: 52,
        promotion: false
      },
      {
        title: "Key: Maze of Illusions",
        description: "Melhor jogo",
        releaseDate: new Date(),
        price: 8,
        promotion: false
      },
      {
        title: "Stardew Valley",
        description: "Perfeito, mas Harvest Moon ainda é melhor pela nostalgia (Back to nature e A Wonderful Life, só)",
        releaseDate: new Date(),
        price: 24.99,
        promotion: false
      }
    ];
    
}
