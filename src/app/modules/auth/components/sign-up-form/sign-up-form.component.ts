import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProblemDetails } from '@core/models';
import { AuthService } from '@modules/auth/services';
import { ProgressBarService } from '@shared/services';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {
  public signUpForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _progressBarService: ProgressBarService
  ) {
    this.signUpForm = _formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    });
  }

  public OnSubmit() {
    this._progressBarService.Show();

    if (this.OnComparePasswords()) {
      this._authService.SignUp(this.signUpForm.value)
        .subscribe({
          next: response => {
            this._progressBarService.Ocult();
            this._router.navigate(['/auth/sign-in']);
            this._snackBar.open('User created!', 'Ok', {
              duration: 6000
            })
          },
          error: (error: ProblemDetails) => {
            this._progressBarService.Ocult();
            this._snackBar.open(error.detail, 'Ok', {
              duration: 6000
            })
          }
        });
    } else {
      this._progressBarService.Ocult();
      this._snackBar.open("Passwords dosent match! Try again.", "Ok", {
        duration: 6000
      });
    }

  }

  public OnGetEmailError(): string {
    if (this.signUpForm.get('email')?.hasError('required')) {
      return "Email is required!";
    }

    if (this.signUpForm.get('email')?.hasError('email')) {
      return "Invalid email!";
    }

    return "Email errors!"
  }

  public OnComparePasswords(): boolean {
    if (this.signUpForm.get('password')?.value === this.signUpForm.get('confirmPassword')?.value) {
      return true;
    } else {
      return false;
    }
  }
}
