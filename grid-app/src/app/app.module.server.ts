import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    MatTableModule,
    CdkTableModule,
    CdkTreeModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
