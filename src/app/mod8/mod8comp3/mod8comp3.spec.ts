import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod8comp3 } from './mod8comp3';

describe('Mod8comp3', () => {
  let component: Mod8comp3;
  let fixture: ComponentFixture<Mod8comp3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod8comp3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod8comp3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
