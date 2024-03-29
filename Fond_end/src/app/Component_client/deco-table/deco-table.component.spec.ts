import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoTableComponent } from './deco-table.component';

describe('DecoTableComponent', () => {
  let component: DecoTableComponent;
  let fixture: ComponentFixture<DecoTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoTableComponent]
    });
    fixture = TestBed.createComponent(DecoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
