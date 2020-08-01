export class Food {
  public id: number;
  public name: string;
  public proteins: number;

  constructor(data: any = null) {
    this.update(data);
  }

  private update(data: any): void {
    this.id = data.id;
    this.name = data.name;
    this.proteins = data.proteins;
  }
}