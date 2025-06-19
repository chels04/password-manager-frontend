import { Component, Input } from '@angular/core';
import { PasswordItem } from '../../models/password-item.model';

@Component({
  selector: 'app-password-table',
  standalone: false,
  templateUrl: './password-table.html',
  styleUrl: './password-table.css'
})
export class PasswordTable {
  @Input() passwords: PasswordItem[] = [];
}
