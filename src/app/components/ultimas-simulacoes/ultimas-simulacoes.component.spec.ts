import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimasSimulacoesComponent } from './ultimas-simulacoes.component';

describe('UltimasSimulacoesComponent', () => {
  let component: UltimasSimulacoesComponent;
  let fixture: ComponentFixture<UltimasSimulacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UltimasSimulacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UltimasSimulacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
