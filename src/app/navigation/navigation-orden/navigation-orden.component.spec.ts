import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOrdenComponent } from './navigation-orden.component';

describe('NavigationOrdenComponent', () => {
  let component: NavigationOrdenComponent;
  let fixture: ComponentFixture<NavigationOrdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationOrdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
