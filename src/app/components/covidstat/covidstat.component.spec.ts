import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidstatComponent } from './covidstat.component';

describe('CovidstatComponent', () => {
  let component: CovidstatComponent;
  let fixture: ComponentFixture<CovidstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
