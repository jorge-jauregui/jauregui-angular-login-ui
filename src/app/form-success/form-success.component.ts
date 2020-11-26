import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-success',
  templateUrl: './form-success.component.html',
  styleUrls: ['./form-success.component.css']
})
export class FormSuccessComponent implements OnInit {
  formData;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.formData = params;
      console.log('This is from success component:')
      console.log(params);
    });
  }

  ngOnInit(): void {

  }

}
