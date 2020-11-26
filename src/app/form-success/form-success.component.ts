import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-success',
  templateUrl: './form-success.component.html',
  styleUrls: ['./form-success.component.css']
})
export class FormSuccessComponent implements OnInit {
  formData;

  // This constructor subscribes to the form values/query params that are shipped from form component
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.formData = params;
    });
  }

  ngOnInit(): void {

  }

}
