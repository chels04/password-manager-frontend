import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTable } from './password-table';

describe('PasswordTable', () => {
  let component: PasswordTable;
  let fixture: ComponentFixture<PasswordTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
