import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GroupComponent } from './groups-items/group/group.component';
import { ItemComponent } from './groups-items/item/item.component';
import { GroupsItemsComponent } from './groups-items/groups-items.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    ItemComponent,
    GroupsItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
