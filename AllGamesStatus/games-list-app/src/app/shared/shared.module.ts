import { SimpleDirective } from './directives/simple.directive';
import { GameDirective } from './directives/game.directive';
import { PromotionPipe } from './pipes/promotion.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material/material.module';

import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    PromotionPipe,
    GameDirective,
    SimpleDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PromotionPipe,
    GameDirective,
    SimpleDirective        
  ]
})
export class SharedModule { }
