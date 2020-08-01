import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from 'src/app/services/cats.service';
import { Cat } from 'src/app/classes/cat';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {

  public cats: Cat[];

  constructor(
    private router: Router,
    private catsService: CatsService
    ) { }

  public ngOnInit(): void {
    this.catsService.getCats().subscribe(data => {
    this.cats = data;
    });
  }
  
  public dogPage() {
    this.router.navigate(['app-dog']);
  }

  public greenDogsPage() {
    this.router.navigate(['app-green-dog']);
  }

  public foodPage() {
    this.router.navigate(['app-food']);
  }

  public index() {
    this.router.navigate(['']);
  }
}
