import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListService } from './list.service';
import { ClientsComponent } from './clients.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { ClientsFilterPipe } from './clints-filter.pipe';

@NgModule({
    declarations: [
        ClientsComponent,
        ListComponent,
        DetailComponent,
        ClientsFilterPipe
    ],
    imports: [
        CommonModule,
    ],
    providers: [ListService],
    exports: [
        ClientsComponent,
        ListComponent,
        DetailComponent
    ]
})
export class ClientsModule { }
