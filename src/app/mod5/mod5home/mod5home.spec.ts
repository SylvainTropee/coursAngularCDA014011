import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5home } from './mod5home';

describe('Mod5home', () => {
  let component: Mod5home;
  let fixture: ComponentFixture<Mod5home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod5home]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod5home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
