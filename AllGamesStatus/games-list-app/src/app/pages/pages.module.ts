import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListComponent } from './../pages/game-list/game-list.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import { MaterialModule } from 'src/app/material/material.module';
import { GameCreateComponent } from './game-create/game-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    GameCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports: [
    GameListComponent,
    GameItemComponent
  ]
})
export class PagesModule { }
