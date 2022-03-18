import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenualquilerComponent } from './menualquiler.component';

describe('MenualquilerComponent', () => {
  let component: MenualquilerComponent;
  let fixture: ComponentFixture<MenualquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenualquilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenualquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
