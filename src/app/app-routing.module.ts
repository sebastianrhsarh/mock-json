import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DogComponent } from './components/dog/dog.component';
import { CatComponent } from './components/cat/cat.component';
import { FoodComponent } from './components/food/food.component';
import { GreenDogComponent } from './components/green-dog/green-dog.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    
  },
  {
    path: 'app-dog',
    component: DogComponent
  },
  {
    path: 'app-cat',
    component: CatComponent
  },
  {
    path: 'app-food',
    component: FoodComponent
  },
  {
    path: 'app-green-dog',
    component: GreenDogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
