import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarParcelaComponent } from './alterar-parcela.component';

describe('AlterarParcelaComponent', () => {
  let component: AlterarParcelaComponent;
  let fixture: ComponentFixture<AlterarParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlterarParcelaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlterarParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
