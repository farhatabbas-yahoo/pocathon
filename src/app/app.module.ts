import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { ActivitiesModule } from './activities/activities.module';

import { LogService } from "./service/log.service";

import { AppComponent } from './app.component';

import { initializedRoutes } from "./app.routes";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { BoxDirective } from './directives/box.directive';


@NgModule({
  declarations: [
    AppComponent,
    BoxDirective,
   // CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    initializedRoutes,
    UserModule,
    BankAccountModule,
    ActivitiesModule  
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
