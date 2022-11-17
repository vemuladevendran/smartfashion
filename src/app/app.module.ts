import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellModule } from './components/app-shell/app-shell.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminShellModule } from './components/admin-shell/admin-shell.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppShellModule,
    BrowserAnimationsModule,
    AdminShellModule,
    AppShellModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
