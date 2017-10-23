import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    constructor(private http: Http) {}

    public getClients() {
        return this.http.get('/assets/clients.json').map(result => result.json());
    }
}