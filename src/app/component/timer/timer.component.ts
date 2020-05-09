import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  public timeLeft = 180;

  public timeView;

  @Output()
  public eventEmitter = new EventEmitter<string>();

  constructor(
  ) {
  }

  ngOnInit(): void {
    const timer = setInterval(() => {
      const minute = Math.floor(this.timeLeft / 60);
      const second = this.timeLeft % 60;
      this.timeView = (minute ? minute + ' min ' : '') + second + 'second left';
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        clearInterval(timer);
        this.eventEmitter.emit();
      }
    }, 1000);
  }

}
