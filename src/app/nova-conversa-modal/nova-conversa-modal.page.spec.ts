import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaConversaModalPage } from './nova-conversa-modal.page';

describe('NovaConversaModalPage', () => {
  let component: NovaConversaModalPage;
  let fixture: ComponentFixture<NovaConversaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaConversaModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaConversaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
