import { Component } from "@angular/core";
import {
  FormGroup,
  AbstractControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { HostService } from "../../host.service";
import { LoginService } from "../../login.service";

@Component({
  selector: "login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"]
})
export class Login {
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(
    fb: FormBuilder,
    public hostService: HostService,
    private loginService: LoginService
  ) {
    console.log(this.hostService);
    this.form = fb.group({
      email: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(4)])
      ]
    });

    this.email = this.form.controls["email"];
    this.password = this.form.controls["password"];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService.logar(this.email.value, this.password.value);
      // your code goes here
      // console.log(values);
    }
  }
}
