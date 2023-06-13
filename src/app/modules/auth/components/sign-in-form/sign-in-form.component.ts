import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProblemDetails } from '@core/models';
import { LocalStorageService } from '@core/services';
import { AuthService } from '@modules/auth/services';
import { ProgressBarService } from '@shared/services/progress-bar.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  public authForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _localStorageService: LocalStorageService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _progressBarService: ProgressBarService
  ) {
    this.authForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  public OnSubmit() {
    this._progressBarService.Show();
    this._authService.SignIn(this.authForm.value)
      .subscribe({
        next: auth_token => {
          this._progressBarService.Ocult();
          this._router.navigate(['/']);
        },
        error: (error: ProblemDetails) => {
          this._progressBarService.Ocult();
          this._snackBar.open(error.detail, 'Ok!', {
            duration: 6000
          });
        }
      });
  }
}
