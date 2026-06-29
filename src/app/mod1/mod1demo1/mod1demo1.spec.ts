import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1demo1 } from './mod1demo1';

describe('Mod1demo1', () => {
  let component: Mod1demo1;
  let fixture: ComponentFixture<Mod1demo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mod1demo1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mod1demo1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
