import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  counterSignal = signal(15);

  constructor() {
    setInterval(() => {
      this.counterSignal.update((current) => current + 1);
    }, 1000);
  }

  increment(value: number) {
    this.counterSignal.update((current) => current + value);
  }

  decrement(value: number) {
    this.counterSignal.update((current) => current - value);
  }

  reset() {
    this.counterSignal.set(15);
  }
}
