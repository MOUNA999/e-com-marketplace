import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbModalBackdropComponent } from './ngb-modal-backdrop.component';

describe('NgbModalBackdropComponent', () => {
  let component: NgbModalBackdropComponent;
  let fixture: ComponentFixture<NgbModalBackdropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgbModalBackdropComponent]
    });
    fixture = TestBed.createComponent(NgbModalBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
