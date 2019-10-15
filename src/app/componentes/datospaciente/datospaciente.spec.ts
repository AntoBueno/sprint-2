import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatospacientePage } from './datospaciente';

describe('DatospacientePage', () => {
  let component: DatospacientePage;
  let fixture: ComponentFixture<DatospacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatospacientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatospacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
