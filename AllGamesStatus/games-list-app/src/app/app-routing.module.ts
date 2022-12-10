import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './pages/game-list/game-list.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { GameCreateComponent } from 'src/app/pages/game-create/game-create.component';

const routes: Routes = [
  { path:"list", component: GameListComponent },
  { path:"create", component: GameCreateComponent },
  { path:"", redirectTo: "list", pathMatch: "full" },
  { path:"**", component: PageNotFoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }