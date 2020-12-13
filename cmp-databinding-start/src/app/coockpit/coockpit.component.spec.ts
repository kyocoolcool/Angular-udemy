import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoockpitComponent } from './coockpit.component';

describe('CoockpitComponent', () => {
  let component: CoockpitComponent;
  let fixture: ComponentFixture<CoockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
