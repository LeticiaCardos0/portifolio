import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechComponent } from './tech';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
