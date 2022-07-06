import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMostSearchedComponent } from './top-most-searched.component';

describe('TopMostSearchedComponent', () => {
  let component: TopMostSearchedComponent;
  let fixture: ComponentFixture<TopMostSearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMostSearchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMostSearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
