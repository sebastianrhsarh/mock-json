import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenDogComponent } from './green-dog.component';

describe('GreenDogComponent', () => {
  let component: GreenDogComponent;
  let fixture: ComponentFixture<GreenDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
