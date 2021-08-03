import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidmetricComponent } from './covidmetric.component';

describe('CovidmetricComponent', () => {
  let component: CovidmetricComponent;
  let fixture: ComponentFixture<CovidmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidmetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
