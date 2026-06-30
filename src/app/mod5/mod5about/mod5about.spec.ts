import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod5about } from './mod5about';

describe('Mod5about', () => {
  let component: Mod5about;
  let fixture: ComponentFixture<Mod5about>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod5about]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod5about);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
