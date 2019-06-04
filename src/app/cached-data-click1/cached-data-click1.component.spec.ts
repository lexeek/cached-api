import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedDataClick1Component } from './cached-data-click1.component';

describe('CachedDataClick1Component', () => {
  let component: CachedDataClick1Component;
  let fixture: ComponentFixture<CachedDataClick1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachedDataClick1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachedDataClick1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
