import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public countTotal = 0;
    public countCorrect = 0;

    constructor(private cd: ChangeDetectorRef) {}

    public answer(value: boolean) {
        this.countCorrect += value ? 1 : this.countCorrect > 0 ? -1 : 0;
    }

    public createAnswer() {
        this.countTotal++;
        this.cd.detectChanges();
    }
}
