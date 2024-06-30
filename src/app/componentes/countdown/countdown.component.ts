import { Component, Input, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      state('out', style({ transform: 'translateY(100%)' })),
      transition('in => out', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class CountdownComponent implements OnDestroy {
  @Input() showCountdown: boolean = false;
  countdownNumbers: number[] = [6, 5, 4, 3, 2, 1, 0];
  countdownNumber: number | null = null;
  private countdownInterval: any;

  ngOnDestroy(): void {
    clearInterval(this.countdownInterval);
  }

  ngOnChanges(): void {
    if (this.showCountdown) {
      this.startCountdown();
    }
  }

  startCountdown(): void {
    let count = 0; // Iniciar desde el número 6 (index 0)
    this.countdownNumber = null;

    this.countdownInterval = setInterval(() => {
      this.countdownNumber = this.countdownNumbers[count];
      count++;

      if (count >= this.countdownNumbers.length) {
        clearInterval(this.countdownInterval);
      }
    }, 1000);
  }
}
