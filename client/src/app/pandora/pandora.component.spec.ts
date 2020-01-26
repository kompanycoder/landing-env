import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandoraComponent } from './pandora.component';

describe('PandoraComponent', () => {
  let component: PandoraComponent;
  let fixture: ComponentFixture<PandoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
