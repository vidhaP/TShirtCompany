import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TShirtDetailsComponent } from './t-shirt-details.component';

describe('TShirtDetailsComponent', () => {
  let component: TShirtDetailsComponent;
  let fixture: ComponentFixture<TShirtDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TShirtDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TShirtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
