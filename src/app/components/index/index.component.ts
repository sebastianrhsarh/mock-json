import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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

  public catPage() {
    this.router.navigate(['app-cat']);
  }
}
