import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTarefaPage } from './lista-tarefa.page';

describe('ListaTarefaPage', () => {
  let component: ListaTarefaPage;
  let fixture: ComponentFixture<ListaTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTarefaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
