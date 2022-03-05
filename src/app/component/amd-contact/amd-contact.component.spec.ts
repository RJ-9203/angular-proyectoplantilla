import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdContactComponent } from './amd-contact.component';

describe('AmdContactComponent', () => {
  let component: AmdContactComponent;
  let fixture: ComponentFixture<AmdContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmdContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmdContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
