import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTopComponent } from './table-top.component';

describe('TableTopComponent', () => {
  let component: TableTopComponent;
  let fixture: ComponentFixture<TableTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableTopComponent]
    });
    fixture = TestBed.createComponent(TableTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
