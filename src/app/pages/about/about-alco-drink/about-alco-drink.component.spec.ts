import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAlcoDrinkComponent } from './about-alco-drink.component';

describe('AboutAlcoDrinkComponent', () => {
  let component: AboutAlcoDrinkComponent;
  let fixture: ComponentFixture<AboutAlcoDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAlcoDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAlcoDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
