import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CachedDataComponent } from './cached-data/cached-data.component';
import { CachedDataService } from './services/cached-data.service';
import { HttpClientModule } from '@angular/common/http';
import { CachedDataClick1Component } from './cached-data-click1/cached-data-click1.component';
import { CachedDataClick2Component } from './cached-data-click2/cached-data-click2.component';

@NgModule({
  declarations: [
    AppComponent,
    CachedDataComponent,
    CachedDataClick1Component,
    CachedDataClick2Component
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [CachedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
