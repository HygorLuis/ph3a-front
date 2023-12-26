import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirParcelaComponent } from './incluir-parcela.component';

describe('IncluirParcelaComponent', () => {
  let component: IncluirParcelaComponent;
  let fixture: ComponentFixture<IncluirParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncluirParcelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncluirParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
