import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDemoSelectScrollLoadComponent } from './components/nz-demo-select-scroll-load/nz-demo-select-scroll-load.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NzDemoSelectScrollLoadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    AgGridModule,

    NzButtonModule,
    NzPopoverModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
    NzSelectModule,
    NzSpinModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
