import Game from 'src/app/models/Game';
import { GameItemComponent } from './../../pages/game-list/game-item/game-item.component';
import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
    selector: "[gameDirective]",
})
export class GameDirective implements OnInit {

    @Input()
    gameDirective?: boolean | undefined;

    constructor(private el: ElementRef){
        
        // if(this.promotion){
        //     el.nativeElement.style.backgroundcolor = 'green';
        // } else {
        //     el.nativeElement.style.backgroundcolor = 'red';            
        // }
    }

    ngOnInit(): void {
            
        console.log(this.gameDirective);

        if(this.gameDirective){
            this.el.nativeElement.style.backgroundcolor = 'green';
        } else {
            this.el.nativeElement.style.backgroundcolor = 'red';            
        }
    }

    // ngOnChanges(changes: SimpleChanges): void {
    //     if (this.taskDirective) {
    //       this.el.nativeElement.style.backgroundColor = 'green';
    //     } else {
    //       this.el.nativeElement.style.backgroundColor = 'red';
    //     }
    //   }    

}