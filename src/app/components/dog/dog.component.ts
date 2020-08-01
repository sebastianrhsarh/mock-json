import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DogsService } from 'src/app/services/dogs.service';
import { Dog } from 'src/app/classes/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  public dogs: Dog[];
  
  constructor(
    private router: Router,
    private dogsService: DogsService
    ) { }

  public ngOnInit(): void {
    this.dogsService.getDogs().subscribe(data => {
      this.dogs = data;
    });
  }

  public greenDogsPage() {
    this.router.navigate(['app-green-dog']);
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
