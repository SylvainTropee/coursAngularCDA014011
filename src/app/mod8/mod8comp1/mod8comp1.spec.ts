import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8comp1 } from './mod8comp1';

describe('Mod8comp1', () => {
  let component: Mod8comp1;
  let fixture: ComponentFixture<Mod8comp1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8comp1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod8comp1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
