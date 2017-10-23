import { Component, Input } from '@angular/core';
import { Client } from './list.component';

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent {
    @Input() public item: Client;
}
