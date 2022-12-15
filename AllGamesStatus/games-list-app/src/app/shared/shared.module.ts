import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material/material.module';


import { SimpleDirective } from './directives/simple.directive';
import { GameDirective } from './directives/game.directive';

import { PromotionPipe } from './pipes/promotion.pipe';

import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './dialog/dialog.component';
import { GameFormComponent } from 'src/app/shared/game-form/game-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PromotionPipe,
    GameDirective,
    SimpleDirective,
    DialogComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    PromotionPipe,
    GameDirective,
    SimpleDirective,
    DialogComponent,
    GameFormComponent   
  ]
})
export class SharedModule { }
