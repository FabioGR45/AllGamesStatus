import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { GameService } from './../../services/game.service';

import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {
  @Input() newGame: Game = new Game("Novo jogo");
  @Input() requestType: string = "post";

  gameForm?: FormGroup;

  constructor(private gameService: GameService){ 
    
  }

  ngOnInit(){
    this.gameForm = new FormGroup({
        title: new FormControl(this.newGame.title),
        description: new FormControl(this.newGame.description),
        releaseDate: new FormControl(this.newGame.releaseDate),
        price: new FormControl(this.newGame.price),
        promotion: new FormControl(this.newGame.promotion)
    })
  }

  onSubmitForm(){

    this.gameForm?.patchValue({
      title: this.gameForm?.controls['title'].value,
      description: this.gameForm?.controls['description'].value,
      releaseDate: new Date(this.gameForm?.controls['releaseDate'].value),
      price: this.gameForm?.controls['price'].value,
      promotion: this.gameForm?.controls['promotion'].value
    })

    this.newGame = {id: this.newGame.id, ...this.gameForm?.value};

    if(this.requestType == "post") {

    this.gameService.postGame(this.newGame);

    } else {

    this.gameService.updateGame(this.newGame.id, this.newGame);

    }
  }
}