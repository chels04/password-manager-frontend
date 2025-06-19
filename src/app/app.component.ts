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
  showAddDialog = false;

  constructor(private passwordService: PasswordService) {}

  ngOnInit() {
    this.loadPasswords();
  }

  loadPasswords() {
    this.passwordService.getAll().subscribe(data => this.passwords = data);
  }

  openAddDialog() {
    this.showAddDialog = true;
  }

  closeAddDialog() {
    this.showAddDialog = false;
  }

  addPassword(password: PasswordItem) {
    this.passwordService.add(password).subscribe(newPw => {
      this.passwords.push(newPw);
      this.showAddDialog = false;
    });
  }
}
