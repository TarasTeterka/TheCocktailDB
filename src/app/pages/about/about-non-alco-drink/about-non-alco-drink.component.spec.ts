import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNonAlcoDrinkComponent } from './about-non-alco-drink.component';

describe('AboutNonAlcoDrinkComponent', () => {
  let component: AboutNonAlcoDrinkComponent;
  let fixture: ComponentFixture<AboutNonAlcoDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNonAlcoDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNonAlcoDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
