import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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

  constructor(
    public onlyRoutesService: OnlyRoutesService,
    private formbuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formbuilder.group({
      origin: ['MZL', [Validators.required, Validators.minLength(3)]],
      destination: ['BCN'],
      level: [0]
    });
  }

  ngOnInit(): void { }

  submit() {
    console.log(this.form.value);
    this.router.navigate(['/home'], { queryParams: { origin: this.form.value.origin, destination: this.form.value.destination, level: this.form.value.level } });
  }

}
