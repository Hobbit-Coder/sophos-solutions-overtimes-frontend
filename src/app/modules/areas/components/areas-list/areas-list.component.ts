import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Area } from '@core/models/area';
import { AreaService } from '@modules/areas/services';

@Component({
  selector: 'app-areas-list',
  templateUrl: './areas-list.component.html',
  styleUrls: ['./areas-list.component.scss']
})
export class AreasListComponent {
  public displayedColumns: string[];
  public dataSource: MatTableDataSource<Area>;

  public areas: Area[];

  constructor(private _areaService: AreaService) {
    this.displayedColumns = ['name', 'description', 'created on', 'modified on', 'actions'];
    this.areas = [];
    this.dataSource = new MatTableDataSource<Area>(this.areas);
  }

  ngOnInit(): void {
    this.GetAreas();
  }

  public OnApplyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public OnDelete(id: string) {
    this._areaService.DeleteArea(id)
      .subscribe({
        next: _ => {
          this.GetAreas();
        }
      });
  }

  public GetAreas() {
    this._areaService.GetAreas().subscribe({
      next: data => {
        this.dataSource.data = data;
      }
    });
  }
}
