import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinterconsultaPage } from './verinterconsulta';

describe('VerinterconsultaPage', () => {
  let component: VerinterconsultaPage;
  let fixture: ComponentFixture<VerinterconsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerinterconsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinterconsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
