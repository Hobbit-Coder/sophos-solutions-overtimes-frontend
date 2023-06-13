import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-area-page',
  templateUrl: './add-area-page.component.html',
  styleUrls: ['./add-area-page.component.scss']
})
export class AddAreaPageComponent implements OnInit {

  public Id?: string

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let param: string = this.activatedRoute.snapshot.params['id'];

    if (param) {
      this.Id = param;
    }
  }
}
