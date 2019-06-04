import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedDataClick2Component } from './cached-data-click2.component';

describe('CachedDataClick2Component', () => {
  let component: CachedDataClick2Component;
  let fixture: ComponentFixture<CachedDataClick2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachedDataClick2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachedDataClick2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
