import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { PetComponent } from './pet/pet.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';

export const routerConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'hero',
    component: HeroComponent
  },
   {
    path: 'pet',
    component: PetComponent
  },
   {
    path: 'about',
    component: AboutComponent
  },
  {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
