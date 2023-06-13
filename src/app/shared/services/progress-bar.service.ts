import { Injectable } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ProgressBar } from '@shared/models/progress-bar';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProgressBarService {

  public progressBar$: BehaviorSubject<ProgressBar>;
  private progressData: ProgressBar;

  constructor() {
    this.progressData = {
      isVisible: false,
      color: "primary",
      mode: "indeterminate"
    }
    this.progressBar$ = new BehaviorSubject(this.progressData);
  }

  public Show(color?: string, mode?: ProgressBarMode) {

    this.progressData.isVisible = true;

    if (color)
      this.progressData.color = color;

    if (mode)
      this.progressData.mode = mode;

    this.progressBar$.next(this.progressData);
  }

  public Ocult() {
    this.progressData.isVisible = false;

    this.progressBar$.next(this.progressData);
  }
}
