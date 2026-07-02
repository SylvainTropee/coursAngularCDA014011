import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8comp2 } from './mod8comp2';

describe('Mod8comp2', () => {
  let component: Mod8comp2;
  let fixture: ComponentFixture<Mod8comp2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8comp2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod8comp2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
