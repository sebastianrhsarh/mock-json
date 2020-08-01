import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { FoodComponent } from './components/food/food.component';
import { GreenDogComponent } from './components/green-dog/green-dog.component';
import { HttpClientModule } from '@angular/common/http';
import { CatsService } from './services/cats.service';
import { DogsService } from './services/dogs.service';
@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    FoodComponent,
    GreenDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    CatsService,
    DogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
