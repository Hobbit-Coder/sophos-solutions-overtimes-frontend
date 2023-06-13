import { Component, ViewChild, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { LocalStorageService } from '@core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  @ViewChild('sidebar') sidebar?: MatSidenav;

  constructor(private _localStorageService: LocalStorageService, private router: Router) { }

  public OnSignOut() {
    this._localStorageService.ClearAll();
    this.router.navigate(['/auth/sign-in']);
  }
}
