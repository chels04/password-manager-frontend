import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPasswordDialog } from './add-password-dialog';

describe('AddPasswordDialog', () => {
  let component: AddPasswordDialog;
  let fixture: ComponentFixture<AddPasswordDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPasswordDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPasswordDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
