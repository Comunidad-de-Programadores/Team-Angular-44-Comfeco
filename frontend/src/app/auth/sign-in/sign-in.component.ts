import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  hidePassword: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.hidePassword = true;
    this.initForm();
  }

  ngOnInit(): void {}

  initForm(): void{
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }
  get errorEmailRequired(): boolean {
    return this.form.get('email').errors?.required && this.form.get('email').touched;
  }
  get errorEmailFormat(): boolean {
    return this.form.get('email').errors?.pattern && this.form.get('email').touched;
  }
  get errorPasswordRequired(): boolean{
    return this.form.get('password').errors?.required && this.form.get('password').touched;
  }
  get errorPasswordLength(): boolean{
    return this.form.get('password').errors?.minlength && this.form.get('password').touched;
  }

  singIn():void {
    console.log(this.form.valid)
  }
}
