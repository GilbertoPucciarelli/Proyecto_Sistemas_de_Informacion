import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComprarComponent } from './navigation-comprar.component';

describe('NavigationComprarComponent', () => {
  let component: NavigationComprarComponent;
  let fixture: ComponentFixture<NavigationComprarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComprarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
