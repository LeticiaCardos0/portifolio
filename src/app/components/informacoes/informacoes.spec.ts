import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesComponent } from './informacoes';

describe('InformacoesComponent', () => {
  let component: InformacoesComponent;
  let fixture: ComponentFixture<InformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacoesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
