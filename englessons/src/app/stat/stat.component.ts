import { Component, Input } from '@angular/core';

interface Answer {
    name: string;
    correct: boolean;
}

@Component({
    selector: 'stat',
    templateUrl: './stat.component.html'
})
export class StatComponent {

    @Input()
    public countTotal: number;
    @Input()
    public countCorrect: number;
}
