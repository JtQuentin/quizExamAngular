import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private startTime: number = 0;
  private isRunning: boolean = false;
  private totalElapsedTime: number = 0; // Nouvelle variable

  startTimer() {
    this.startTime = Date.now();
    this.isRunning = true;
  }

  stopTimer() {
    this.isRunning = false;
    this.totalElapsedTime += this.getElapsedTime();
  }

  getElapsedTime(): number {
    const currentTime = Date.now();
    if (this.isRunning) {
      return Math.floor((currentTime - this.startTime) / 1000);
    }
    return 0;
  }

  getTotalElapsedTime(): number {
    return this.totalElapsedTime;
  }
}
