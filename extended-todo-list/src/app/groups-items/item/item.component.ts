import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../groups-items.service';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent {
    @Input() public item: Item;
    @Output() public check: EventEmitter<Item> = new EventEmitter();

    constructor() { }

    public checkItem(checked: boolean) {
        this.check.emit(Object.assign({}, this.item, {isRead: checked}));
    }
}
