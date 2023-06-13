import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProblemDetails } from '@core/models';
import { CreateAreaRequest } from '@modules/areas/models';
import { UpdateAreaRequest } from '@modules/areas/models/update-area-request';
import { AreaService } from '@modules/areas/services';
import { ProgressBarService } from '@shared/services';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.scss']
})
export class AreaFormComponent implements OnInit {
  @Input('area-id') Id?: string;

  public areaForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _areaService: AreaService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _progressBarService: ProgressBarService
  ) {
    this.areaForm = _formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      description: ['']
    });
  }

  ngOnInit(): void {
    if (this.Id) {
      this._areaService.GetAreaById(this.Id)
        .subscribe({
          next: area => {
            this.areaForm.get('name')?.setValue(area.name);
            this.areaForm.get('description')?.setValue(area.description);
          }
        });

    }
  }

  public OnSubmit() {
    this._progressBarService.Show();

    if (this.Id) {

      let area: UpdateAreaRequest = this.areaForm.value;
      area.id = this.Id;

      this._areaService.UpdateArea(area)
        .subscribe({
          next: _ => {
            this._progressBarService.Ocult();
            this._router.navigate(['/areas']);
            this._snackBar.open('Area updated!', 'Ok', {
              duration: 6000
            });
          },
          error: (error: ProblemDetails) => {
            this._progressBarService.Ocult();
            this._snackBar.open(error.detail, 'Ok', {
              duration: 6000
            });
          }
        });
    } else {
      this._areaService.CreateArea(this.areaForm.value)
        .subscribe({
          next: id => {
            this._progressBarService.Ocult();
            this._router.navigate(['/areas']);
            this._snackBar.open('Area created!', 'Ok', {
              duration: 6000
            });
          },
          error: (error: ProblemDetails) => {
            this._progressBarService.Ocult();
            this._snackBar.open(error.detail, 'Ok', {
              duration: 6000
            });
          }
        });
    }
  }
}
