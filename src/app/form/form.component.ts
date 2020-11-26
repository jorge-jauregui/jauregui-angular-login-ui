import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public registerForm: FormGroup;

  // This constructor initializes the reactive form
  constructor(
    private formBuilder: FormBuilder,
    private router: Router) {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      birthYear: [null, [Validators.required, Validators.max(2000)]]
    })
  }

  ngOnInit(): void {
  }

  // This method turns the form values into query params and ships these to form-success component
  onSubmitForm() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        email: this.registerForm.value.email,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        birthYear: this.registerForm.value.birthYear,
      }
    };
    this.router.navigate(['success'], navigationExtras);
  }

}
