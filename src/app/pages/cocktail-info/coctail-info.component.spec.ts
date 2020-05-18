import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailInfoComponent } from './coctail-info.component';

describe('CoctailInfoComponent', () => {
  let component: CoctailInfoComponent;
  let fixture: ComponentFixture<CoctailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
