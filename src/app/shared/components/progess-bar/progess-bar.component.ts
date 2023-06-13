import { Component, OnInit } from '@angular/core';
import { ProgressBar } from '@shared/models/progress-bar';
import { ProgressBarService } from '@shared/services/progress-bar.service';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.scss']
})
export class ProgessBarComponent implements OnInit {

  public data: ProgressBar = {
    isVisible: false,
    color: "primary",
    mode: "indeterminate"
  }

  constructor(private _progressBarService: ProgressBarService) {

  }

  ngOnInit(): void {
    this._progressBarService.progressBar$.subscribe({
      next: progress => {
        this.data = progress;
      }
    });
  }
}
