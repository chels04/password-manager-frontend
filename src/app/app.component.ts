import { Component, OnInit } from '@angular/core';
import { PasswordService } from './services/password.service';
import { PasswordItem } from './models/password-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  passwords: PasswordItem[] = [];
  decryptedPasswords: { [id: number]: PasswordItem } = {};
  showAddDialog = false;
  editedPassword: PasswordItem | null = null;

  constructor(private passwordService: PasswordService) {}

  ngOnInit() {
    this.loadPasswords();
  }

  loadPasswords() {
    this.passwordService.getAll().subscribe(data => this.passwords = data);
  }

  openAddDialog() {
    this.editedPassword = null;
    this.showAddDialog = true;
  }

  openEditDialog(item: PasswordItem) {
    this.editedPassword = { ...item };
    this.showAddDialog = true;
  }

  closeAddDialog() {
    this.editedPassword = null;
    this.showAddDialog = false;
  }

  addOrUpdatePassword(password: PasswordItem) {
    if (this.editedPassword) {
      this.passwordService.update(password).subscribe(updated => {
        const index = this.passwords.findIndex(p => p.id === updated.id);
        if (index > -1) {
          this.passwords[index] = updated;
        }
        this.closeAddDialog();
      });
    } else {
      this.passwordService.add(password).subscribe(newPw => {
        this.passwords.push(newPw);
        this.closeAddDialog();
      });
    }
  }

  deletePassword(id: number) {
    this.passwords = this.passwords.filter(p => p.id !== id);
  }

  toggleShowPassword(id: number) {
    if (this.decryptedPasswords[id]) {
      // Passwort ausblenden
      delete this.decryptedPasswords[id];
    } else {
      // Passwort laden
      this.passwordService.getDecryptedPassword(id).subscribe(decrypted => {
        this.decryptedPasswords[id] = decrypted;
      },
        error => {
          console.error('Fehler beim Laden des entschlüsselten Passworts', error);});
    }
  }
}
