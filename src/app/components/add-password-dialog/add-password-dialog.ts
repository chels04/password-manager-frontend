import { Component, EventEmitter, Output } from '@angular/core';
import { PasswordItem } from '../../models/password-item.model';

@Component({
  selector: 'app-add-password-dialog',
  standalone: false,
  templateUrl: './add-password-dialog.html',
  styleUrl: './add-password-dialog.css'
})
export class AddPasswordDialog {
  newPassword: PasswordItem = {
    id: 0,
    category: '',
    app: '',
    userName: ''
  };

  @Output() add = new EventEmitter<PasswordItem>();
  @Output() close = new EventEmitter<void>();

  closeDialog() {
    this.close.emit();
  }

  onSubmit() {
    if (this.newPassword.category && this.newPassword.app && this.newPassword.userName && this.newPassword.password) {
      console.log("Lol!");
      this.add.emit(this.newPassword as PasswordItem);
    }
  }

  onCancel() {
    this.close.emit();
  }
}
