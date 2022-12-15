import { GameCreateComponent } from './game-create/game-create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from "../shared/shared.module";

import { GameListComponent } from './../pages/game-list/game-list.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    PageNotFoundComponent,
    GameCreateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    GameListComponent,
    GameItemComponent
  ]
})
export class PagesModule { }
