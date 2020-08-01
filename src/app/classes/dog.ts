import { Food } from './food';
import { Pet } from './pet';

export class Dog extends Pet {
  public food: Food[];
  public raza: string;
  public isMale: boolean;

  constructor(data: any = null) {
    super(data);
    this.food = data.food.map(value => new Food(value));
    this.raza = data.raza;
    this.isMale = data.isMale;
  }
}
