import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/inmemory-db/inmemory-db.service';
import { HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './views/settings/general/general.component';
import { SecurityComponent } from './views/settings/security/security.component';
import { MonitoringComponent } from './views/monitoring/monitoring.component';
import { ScanningComponent } from './views/scanning/scanning.component';
import { RulesComponent } from './views/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SecurityComponent,
    MonitoringComponent,
    ScanningComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
