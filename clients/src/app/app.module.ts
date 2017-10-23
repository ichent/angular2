import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClientsModule } from './clients/clients.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpModule,
        BrowserModule,
        ClientsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
