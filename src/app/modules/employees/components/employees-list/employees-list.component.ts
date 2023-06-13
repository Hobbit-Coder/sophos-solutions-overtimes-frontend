import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@core/models/user';
import { AreaService } from '@modules/areas/services';
import { EmployeeService } from '@modules/employees/services';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<User>;

  public areas: User[];

  constructor(private _employeeService: EmployeeService) {
    this.displayedColumns = ['name', 'last name', 'id', 'email', 'area', 'role', 'actions'];
    this.areas = [];
    this.dataSource = new MatTableDataSource<User>(this.areas);
  }

  ngOnInit(): void {
    this.GetAreas();
  }

  public OnApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public OnDelete(id: string) {
    // this._employeeService.DeleteArea(id)
    //   .subscribe({
    //     next: _ => {
    //       this.GetAreas();
    //     }
    //   });
  }

  public GetAreas() {
    this._employeeService.GetEmployees().subscribe({
      next: data => {
        this.dataSource.data = data;
      }
    });
  }
}
