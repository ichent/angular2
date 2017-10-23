import { Component } from '@angular/core';
import { ListService } from './list.service';

export type Client = {
    general: {
        firstName: string,
        lastName: string,
        avatar: string
    },
    job: {
        company: string,
        title: string
    },
    contact: {
        email: string,
        phone: string
    },
    address: {
        street: string,
        city: string,
        zipCode: string,
        country: string
    },
    selected?: boolean
};

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    public items: Client[];
    public selectedItem: Client;
    public searchText: string;

    constructor(private listService: ListService) {}

    ngOnInit() {
        this.listService.getClients().subscribe((clients: Client[]) => {
           this.items = clients;
        });
    }

    public setSearchText(input: HTMLInputElement) {
        this.searchText = input.value;
    }

    public setSelectedItem(item: Client) {
        this.clearSelection();

        item.selected = true;
        this.selectedItem = item;
    }

    private clearSelection() {
        this.items.map(item => item.selected = false);
    }
}
