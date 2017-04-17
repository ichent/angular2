import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface Item {
    id: number;
    title: string;
    isRead: boolean;
}

export interface Group {
    id: number;
    title: string;
    selected: boolean;
    items: Item[];
}

@Injectable()
export class GroupsService {
    private groups: BehaviorSubject<Group[]> = new BehaviorSubject([]);

    public getGroups() {
        return this.groups;
    }

    public getSelectedGroup(): Group | null {
        let groups = this.groups.getValue();
        let filtered = groups.filter((group: Group) => group.selected);

        return filtered.length ? filtered[0] : null;
    }

    public addGroup(title: string) {
        let groups = this.groups.getValue();
        let id = this.getNextGroupId();
        let selected = id === 1 ? true: false;
        let group: Group = {
            id: id,
            title: title,
            selected: selected,
            items: []
        };
        let groupsUpdated = [...groups, group];

        this.groups.next(groupsUpdated);
    }

    public selectGroup(group: Group) {
        let groups = this.groups.getValue();

        groups = groups.map((item: Group) => {
            item.selected = group.id === item.id ? true : false;

            return item;
        });

        this.groups.next(groups);
    }

    public addItem(group: Group, title: string) {
        let groups = this.groups.getValue();

        groups = groups.map((item: Group) => {
            if (group.id === item.id) {
                group.items = [...group.items, {id: this.getNextItemId(group.items), title: title, isRead: false}];
            }

            return item;
        });

        this.groups.next(groups);
    }

    public checkItem(item: Item) {
        let groups = this.groups.getValue();

        groups = groups.map((group: Group) => {
            if (group.selected) {
                group.items = group.items.map((groupItem: Item) => {
                    if (groupItem.id === item.id) {
                        groupItem.isRead = item.isRead;
                    }

                    return groupItem;
                });
            }

            return group;
        });

        this.groups.next(groups);
    }

    private getNextGroupId() {
        let groups = this.groups.getValue();
        let id = 0;

        if (groups.length) {
            id = groups[groups.length-1]["id"];
        }

        return id + 1;
    }

    private getNextItemId(items: Item[]) {
        return items.length ? items[items.length - 1]["id"] + 1 : 1;
    }
}