import { Pipe, PipeTransform } from '@angular/core';
import { Client } from './list.component';

@Pipe({name: 'clientsFilter'})
export class ClientsFilterPipe implements PipeTransform {
    transform(items: Client[], searchText: string): Client[] {
        if (!searchText) {
            return items;
        }

        let lowerSearchText: string = searchText.toLowerCase();

        return items.filter((item: Client) => {
            return item.general.firstName.toLowerCase().indexOf(lowerSearchText) >= 0 || item.general.lastName.toLowerCase().indexOf(lowerSearchText) >= 0;
        })
    }
}