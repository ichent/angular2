import {
    Component, Input, EventEmitter, Output
} from '@angular/core';
import { Group, Item } from '../groups-items.service';

@Component({
    selector: 'group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.css']
})
export class GroupComponent {
    @Input() public group: Group;
    @Input() public selected: boolean;
    @Output() public select: EventEmitter<Group> = new EventEmitter<Group>();

    constructor() {}

    public selectGroup() {
        this.select.emit(this.group);
    }

    public getCountUnread() {
        return this.group.items.filter((item: Item) => item.isRead === false).length;
    }
}