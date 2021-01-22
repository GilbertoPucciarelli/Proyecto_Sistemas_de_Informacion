import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationGestionarComponent } from './navigation-gestionar.component';

describe('NavigationGestionarComponent', () => {
  let component: NavigationGestionarComponent;
  let fixture: ComponentFixture<NavigationGestionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationGestionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationGestionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
