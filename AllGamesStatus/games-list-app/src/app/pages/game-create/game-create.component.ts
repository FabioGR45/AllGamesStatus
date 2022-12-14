import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { GameService } from './../../services/game.service';

import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent {
  newGame: Game = new Game("Novo jogo");

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

    // this.newGame.title = this.gameForm?.controls['title'].value;
    // this.newGame.description = this.gameForm?.controls['description'].value;
    // this.newGame.releaseDate = this.gameForm?.controls['releaseDate'].value;
    // this.newGame.price = this.gameForm?.controls['price'].value;
    // this.newGame.promotion = this.gameForm?.controls['promotion'].value;


    // const formControl = this.gameForm?.controls || new FormControl();

    this.gameForm?.patchValue({
      title: this.gameForm?.controls['title'].value,
      description: this.gameForm?.controls['description'].value,
      releaseDate: new Date(this.gameForm?.controls['releaseDate'].value),
      price: this.gameForm?.controls['price'].value,
      promotion: this.gameForm?.controls['promotion'].value
    })

    this.newGame = {id: this.newGame.id, ...this.gameForm?.value};

    this.gameService.postGame(this.newGame);

    // console.log(this.newGame.id);
  }
}