import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCompraModalPage } from './nova-compra-modal.page';

describe('NovaCompraModalPage', () => {
  let component: NovaCompraModalPage;
  let fixture: ComponentFixture<NovaCompraModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaCompraModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaCompraModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
