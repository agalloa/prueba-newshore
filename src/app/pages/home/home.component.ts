import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { OnlyRoutesService } from '../../services/only-routes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public form: FormGroup;

  public saveDataApi: any[] = [];

  public currency = [
    {
      money: ' USD ', rate: 1
    },
    {
      money: ' COP ', rate: 4200
    },
    {
      money: ' EUR ', rate: 1.2
    }
  ]

  constructor(
    public onlyRoutesService: OnlyRoutesService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formbuilder.group({
      origin: ['', Validators.maxLength(3)],
      destination: ['', Validators.maxLength(3)],
      level: [0],
      currency: [1]
    }, {
      validators: checkOrigin
    });
  }

  ngOnInit(): void { }

  submit() {
    console.log(this.form.valid);
    if (this.form.valid) {
      this.router.navigate(['/home'], { queryParams: { origin: this.form.value.origin, destination: this.form.value.destination, level: this.form.value.level, currency: this.form.value.currency } });
    }
  }
}

export function checkOrigin(control: AbstractControl): { [key: string]: boolean } | null {
  const origin = control.get('origin');
  const destination = control.get('destination');
  if (origin?.value == destination?.value) {
    return { checkOrigin: true }
  }
  return null;
}