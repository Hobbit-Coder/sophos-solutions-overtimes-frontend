import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProblemDetails } from '@core/models';
import { Area } from '@core/models/area';
import { Role } from '@core/models/role';
import { RoleService } from '@core/services';
import { AreaService } from '@modules/areas/services';
import { UpdateUserRequest } from '@modules/employees/models/update-user-request';
import { EmployeeService } from '@modules/employees/services';
import { ProgressBarService } from '@shared/services';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  public employeeForm: FormGroup;
  public Areas?: Area[];
  public Roles?: Role[];
  public Id: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _employeeService: EmployeeService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _progressBarService: ProgressBarService,
    private activatedRoute: ActivatedRoute,
    private _areaService: AreaService,
    private _roleService: RoleService
  ) {
    this.Id = this.activatedRoute.snapshot.params['id'];

    this.employeeForm = _formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      areaId: ['', Validators.compose([Validators.required])],
      roleId: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    this._areaService.GetAreas().subscribe({
      next: areas => {
        this.Areas = areas;
      }
    });

    this._roleService.GetRoles()
      .subscribe({
        next: roles => {
          this.Roles = roles;
        }
      });

    this._employeeService.GetEmployeeById(this.Id)
      .subscribe({
        next: employee => {
          let rolId = this.Roles?.filter(rol=> rol.name == employee.role[0])
          this.employeeForm.get('name')?.setValue(employee.name);
          this.employeeForm.get('lastName')?.setValue(employee.lastName);
          this.employeeForm.get('username')?.setValue(employee.userName);
          this.employeeForm.get('email')?.setValue(employee.email);
          this.employeeForm.get('areaId')?.setValue(employee.area.id);
          this.employeeForm.get('roleId')?.setValue(rolId![0].id);
        }
      });


  }

  public OnSubmit() {
    debugger
    this._progressBarService.Show();

    let employee: UpdateUserRequest = this.employeeForm.value;
    employee.id = this.Id;

    this._employeeService.UpdateEmployee(this.employeeForm.value)
      .subscribe({
        next: _ => {
          this._progressBarService.Ocult();
          this._router.navigate(['/employees']);
          this._snackBar.open('Employee updated!', 'Ok', {
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
