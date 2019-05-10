import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraDetailPage } from './compra-detail.page';

describe('CompraDetailPage', () => {
  let component: CompraDetailPage;
  let fixture: ComponentFixture<CompraDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
