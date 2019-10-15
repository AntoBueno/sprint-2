import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfichamedicaPage } from './verfichamedica';

describe('VerfichamedicaPage', () => {
  let component: VerfichamedicaPage;
  let fixture: ComponentFixture<VerfichamedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfichamedicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfichamedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
