import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendindApllicationComponent } from './sendind-apllication.component';

describe('SendindApllicationComponent', () => {
  let component: SendindApllicationComponent;
  let fixture: ComponentFixture<SendindApllicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendindApllicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendindApllicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
