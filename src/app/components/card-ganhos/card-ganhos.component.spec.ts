import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGanhosComponent } from './card-ganhos.component';

describe('CardGanhosComponent', () => {
  let component: CardGanhosComponent;
  let fixture: ComponentFixture<CardGanhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGanhosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
