import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularJurosComponent } from './calcular-juros.component';

describe('CalcularJurosComponent', () => {
  let component: CalcularJurosComponent;
  let fixture: ComponentFixture<CalcularJurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcularJurosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcularJurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
