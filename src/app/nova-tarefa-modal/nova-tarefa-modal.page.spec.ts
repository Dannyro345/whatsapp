import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTarefaModalPage } from './nova-tarefa-modal.page';

describe('NovaTarefaModalPage', () => {
  let component: NovaTarefaModalPage;
  let fixture: ComponentFixture<NovaTarefaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaTarefaModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTarefaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
