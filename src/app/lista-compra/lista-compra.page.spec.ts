import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompraPage } from './lista-compra.page';

describe('ListaCompraPage', () => {
  let component: ListaCompraPage;
  let fixture: ComponentFixture<ListaCompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCompraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
