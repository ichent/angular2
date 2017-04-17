import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GroupsService, Group, Item } from './groups-items.service';

@Component({
    selector: 'groups-items',
    templateUrl: './groups-items.component.html',
    styleUrls: ['./groups-items.component.css'],
    providers: [ GroupsService ]
})
export class GroupsItemsComponent {
    public groups$: Observable<Group[]>;
    public catVisible: boolean = false;

    constructor(private groupsService: GroupsService) {
        this.groups$ = groupsService.getGroups().asObservable();
    }

    public onSelectGroup(group: any) {
        this.groupsService.selectGroup(group);
    }

    public onCheckItem(item: Item) {
        if (item.isRead) {
            this.catVisible = true;

            window.setTimeout(() => {
                this.groupsService.checkItem(item);
                this.catVisible = false;
            }, 2000);
        } else {
            this.groupsService.checkItem(item);
        }
    }

    public addGroup(title: string) {
        if (title) {
            this.groupsService.addGroup(title);
        }
    }

    public addItem(group: Group, title: string) {
        let selectedGroup = this.groupsService.getSelectedGroup();

        if (selectedGroup && title) {
            this.groupsService.addItem(selectedGroup, title);
        }
    }

    public getItems() {
        let selectedGroup = this.groupsService.getSelectedGroup();

        return selectedGroup ? selectedGroup.items : [];
    }
}
