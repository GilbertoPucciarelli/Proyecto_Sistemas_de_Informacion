import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAdministradorComponent } from './navigation-administrador.component';

describe('NavigationAdministradorComponent', () => {
  let component: NavigationAdministradorComponent;
  let fixture: ComponentFixture<NavigationAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
