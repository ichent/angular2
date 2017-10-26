import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

interface Answer {
    name: string;
    correct: boolean;
}

@Component({
    selector: 'answer',
    templateUrl: './answer.component.html'
})
export class AnswerComponent implements OnInit {

    @Input()
    public items: Answer[];
    @Output()
    private answer: EventEmitter<boolean> = new EventEmitter();
    @Output()
    private create: EventEmitter<null> = new EventEmitter();
    private currentAnswer = false;

    ngOnInit() {
        this.create.emit();
    }

    public select(value: string) {
        let answer: Answer;

        this.items.map((item: Answer) => {
            if (item.name === value) {
                answer = item;
            }
        });

        if (answer && answer.correct === this.currentAnswer) {
            return;
        }

        this.currentAnswer = answer.correct;

        this.answer.emit(answer ? answer.correct : false);
    }
}
