import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Food } from 'src/app/classes/food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  public foods: Food[];

  constructor(
    private router: Router,
    private dogsService: DogsService
    ) { }

  public ngOnInit(): void {
    this.dogsService.getFood().subscribe(data => {
      this.foods = data.map(value => new Food(value));
    });
  }

  public dogPage() {
    this.router.navigate(['app-dog']);
  }

  public greenDogsPage() {
    this.router.navigate(['app-green-dog']);
  }

  public catPage() {
    this.router.navigate(['app-cat']);
  }
  
  public index() {
    this.router.navigate(['']);
  }
}

