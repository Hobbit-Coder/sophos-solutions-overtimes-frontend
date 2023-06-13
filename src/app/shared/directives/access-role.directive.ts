import { NgIf } from '@angular/common';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { JwtDetails } from '@core/models';
import { LocalStorageService, RoleService } from '@core/services';

@Directive({
  selector: '[appAccessRole]'
})
export class AccessRoleDirective implements OnInit {

  @Input('roles') roles?: string[];

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private _roleService: RoleService) {

  }

  ngOnInit(): void {
    let userRole = this._roleService.GetUserRole();
    if (userRole) {
      let access = this.roles?.includes(userRole);
      if (!access)
        this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none')
    }

  }

}
