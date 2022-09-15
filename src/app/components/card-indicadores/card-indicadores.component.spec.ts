import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndicadoresComponent } from './card-indicadores.component';

describe('CardIndicadoresComponent', () => {
  let component: CardIndicadoresComponent;
  let fixture: ComponentFixture<CardIndicadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIndicadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
