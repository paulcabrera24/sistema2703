import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinasdetalleComponent } from './oficinasdetalle.component';

describe('OficinasdetalleComponent', () => {
  let component: OficinasdetalleComponent;
  let fixture: ComponentFixture<OficinasdetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinasdetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OficinasdetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
