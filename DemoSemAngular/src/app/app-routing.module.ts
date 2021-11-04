import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { BlogIndexComponent } from './blog/index/index.component';

import { HeroesComponent } from './heroes/comphero/heroes.component';

const routes: Routes = [
    { //path: 'blogs', component: BlogIndexComponent 
        path: 'heroes', component: HeroesComponent
    },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }