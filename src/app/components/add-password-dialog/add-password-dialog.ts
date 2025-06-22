import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { PasswordItem } from '../../models/password-item.model';

@Component({
  selector: 'app-add-password-dialog',
  standalone: false,
  templateUrl: './add-password-dialog.html',
  styleUrl: './add-password-dialog.css'
})
export class AddPasswordDialog {
  @Input() model: PasswordItem | null = null;
  @Output() add = new EventEmitter<PasswordItem>();
  @Output() close = new EventEmitter<void>();
  @Output() update = new EventEmitter<PasswordItem>();

  internalModel: PasswordItem = {
    id: 0,
    category: '',
    app: '',
    userName: '',
    password: ''
  };

  showPassword = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges fired:', changes);
    if (changes['model']) {
      this.resetInternalModel();
    }
  }

  private resetInternalModel() {
    this.internalModel = this.model
      ? { ...this.model, password: '' } 
      : {
          id: 0,
          category: '',
          app: '',
          userName: '',
          password: ''
        };
    this.showPassword = false;
  }

  closeDialog() {
    this.close.emit();
  }

  onSubmit() {
    if (!this.model && !this.internalModel.password) {
      alert('Password is required!');
      return;
    }
    if (this.model) {
      // Wenn Passwort leer, Feld komplett entfernen
      const updated: PasswordItem = {
        ...this.internalModel
      };
      if (!this.internalModel.password) {
        delete (updated as any).password;
      }
      this.update.emit(updated); 
    } else {
      this.add.emit(this.internalModel);  
    }
  }

  onCancel() {
    this.close.emit();
  }
}
