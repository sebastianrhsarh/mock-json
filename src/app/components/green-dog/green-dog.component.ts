import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dog } from 'src/app/classes/dog';

@Component({
  selector: 'app-green-dog',
  templateUrl: './green-dog.component.html',
  styleUrls: ['./green-dog.component.scss']
})
export class GreenDogComponent implements OnInit {

  public greenDogs: Dog[];
  
  constructor(
    private router: Router,
    private dogsService: DogsService
    ) { }

  public ngOnInit(): void {
    this.dogsService.getGreenDogs().subscribe(data => {
    this.greenDogs = data; 
    });
  }

  public dogPage() {
    this.router.navigate(['app-dog']);
  }

  public foodPage() {
    this.router.navigate(['app-food']);
  }

  public catPage() {
    this.router.navigate(['app-cat']);
  }

  public index() {
    this.router.navigate(['']);
  }
}

