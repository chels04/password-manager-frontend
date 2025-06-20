import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PasswordItem } from '../../models/password-item.model';

@Component({
  selector: 'app-password-table',
  standalone: false,
  templateUrl: './password-table.html',
  styleUrl: './password-table.css'
})
export class PasswordTable {
  @Input() passwords: PasswordItem[] = [];
  @Input() decryptedPasswords: { [id: number]: PasswordItem } = {};

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<PasswordItem>();
  @Output() showPassword = new EventEmitter<number>();

  shownPasswords: { [id: number]: boolean } = {};

  onShowPassword(id: number) {
    this.shownPasswords[id] = !this.shownPasswords[id];
    this.showPassword.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(item: PasswordItem) {
    this.edit.emit(item);
  }
}
