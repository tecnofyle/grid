import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    CdkTableModule, 
    CdkTreeModule,
    MatButtonModule
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
