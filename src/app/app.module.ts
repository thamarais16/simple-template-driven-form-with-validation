import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContactFormComponent, TemplateFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
