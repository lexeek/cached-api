import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CachedDataComponent } from './cached-data.component';

describe('CachedDataComponent', () => {
  let component: CachedDataComponent;
  let fixture: ComponentFixture<CachedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CachedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CachedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
