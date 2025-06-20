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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges fired:', changes);
    if (changes['model']) {
      this.resetInternalModel();
    }
  }

  private resetInternalModel() {
    this.internalModel = this.model
      ? { ...this.model }
      : {
          id: 0,
          category: '',
          app: '',
          userName: '',
          password: ''
        };
  }

  closeDialog() {
    this.close.emit();
  }

  onSubmit() {
      if (this.model) {
      this.update.emit(this.internalModel); 
    } else {
      this.add.emit(this.internalModel);  
    }
  }

  onCancel() {
    this.close.emit();
  }
}
