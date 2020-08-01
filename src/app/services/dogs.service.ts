import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../classes/dog';
import {Observable, observable} from 'rxjs';
import { Food } from '../classes/food';


@Injectable()
export class DogsService {

  constructor(
    private http: HttpClient
  ) { }

  public getDogs(): Observable<Dog[]> {
    return new Observable<Dog[]>(observe => {
      this.http.get('../../assets/dogs.json').subscribe((data: any[]) => {
        const dogs = data.map(value => new Dog(value));
        observe.next(dogs);
        observe.complete();
      });
    });
  }

  public getGreenDogs(): Observable<Dog[]> {
    return new Observable<Dog[]>(observe => {
      this.http.get('../../assets/dogs.json').subscribe((data: any[]) => {
        const dogs = data.map(value => new Dog(value));
        const filteredDogs = dogs.filter(data => data.color === 'Green');
        observe.next(filteredDogs);
        observe.complete();
      });
    });
  }

  public getFood(): Observable<Food[]> {
    return new Observable<Food[]>(observe => {
      this.http.get('../../assets/dogs.json').subscribe((data: any[]) => {
        const dogs = data.map(value => new Dog(value));
        let array = [];
        let filteredArray = [];
        for (let dog of dogs) {
          for (let food of dog.food) {
            array.push(food);
          }
        }
        filteredArray = this.arrayFilter(array, it => it.id);
        observe.next(filteredArray);
        observe.complete();
      });
    });
  }

  public arrayFilter(data, key) {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  }
}
