import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfichaPage } from './editarficha';

describe('EditarfichaPage', () => {
  let component: EditarfichaPage;
  let fixture: ComponentFixture<EditarfichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarfichaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarfichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
