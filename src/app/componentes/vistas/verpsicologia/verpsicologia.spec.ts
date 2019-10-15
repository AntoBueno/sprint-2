import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpsicologiaPage } from './verpsicologia';

describe('VerpsicologiaPage', () => {
  let component: VerpsicologiaPage;
  let fixture: ComponentFixture<VerpsicologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerpsicologiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerpsicologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
