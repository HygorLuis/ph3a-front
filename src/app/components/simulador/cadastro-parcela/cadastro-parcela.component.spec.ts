import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParcelaComponent } from './cadastro-parcela.component';

describe('CadastroParcelaComponent', () => {
  let component: CadastroParcelaComponent;
  let fixture: ComponentFixture<CadastroParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroParcelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
