import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';   
import { FormsModule } from '@angular/forms'; 
import { MatButtonModule} from '@angular/material/button';  
import { MatFormFieldModule} from '@angular/material/form-field';  
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatCardModule, 
    MatButtonModule ,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
    MatSnackBarModule
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
