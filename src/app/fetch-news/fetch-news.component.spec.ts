import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchNewsComponent } from './fetch-news.component';

describe('FetchNewsComponent', () => {
  let component: FetchNewsComponent;
  let fixture: ComponentFixture<FetchNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchNewsComponent]
    });
    fixture = TestBed.createComponent(FetchNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
