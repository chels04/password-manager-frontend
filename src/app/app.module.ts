import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PasswordTable } from './components/password-table/password-table';
import { AddPasswordDialog } from './components/add-password-dialog/add-password-dialog';

@NgModule({
  declarations: [
    AppComponent,
    PasswordTable,
    AddPasswordDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
