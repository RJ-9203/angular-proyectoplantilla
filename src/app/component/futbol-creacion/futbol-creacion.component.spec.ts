import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolCreacionComponent } from './futbol-creacion.component';

describe('FutbolCreacionComponent', () => {
  let component: FutbolCreacionComponent;
  let fixture: ComponentFixture<FutbolCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutbolCreacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutbolCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
