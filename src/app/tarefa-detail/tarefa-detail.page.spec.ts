import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDetailPage } from './tarefa-detail.page';

describe('TarefaDetailPage', () => {
  let component: TarefaDetailPage;
  let fixture: ComponentFixture<TarefaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
