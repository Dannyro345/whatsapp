import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaDetailPage } from './conversa-detail.page';

describe('ConversaDetailPage', () => {
  let component: ConversaDetailPage;
  let fixture: ComponentFixture<ConversaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
