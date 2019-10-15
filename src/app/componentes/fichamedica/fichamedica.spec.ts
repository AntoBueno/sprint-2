import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichamedicaPage } from './fichamedica';

describe('FichamedicaPage', () => {
  let component: FichamedicaPage;
  let fixture: ComponentFixture<FichamedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichamedicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichamedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
