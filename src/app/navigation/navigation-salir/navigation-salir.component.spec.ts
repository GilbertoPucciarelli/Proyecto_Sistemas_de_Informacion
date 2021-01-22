import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSalirComponent } from './navigation-salir.component';

describe('NavigationSalirComponent', () => {
  let component: NavigationSalirComponent;
  let fixture: ComponentFixture<NavigationSalirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSalirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSalirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
