import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEnvComponent } from './home-env.component';

describe('HomeEnvComponent', () => {
  let component: HomeEnvComponent;
  let fixture: ComponentFixture<HomeEnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
