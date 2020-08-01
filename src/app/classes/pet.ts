export class Pet {
  public id: number;
  public name: string;
  public color: string;

  constructor(data: any = null) {
    this.update(data);
  }

  private update(data: any): void {
    this.id = data.id;
    this.name = data.name;
    this.color = data.color;
  }
}