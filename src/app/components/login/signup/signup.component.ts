import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userEmail: string;
  userPassword: string;
  SignupForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  userPasswordControl = new FormControl('', Validators.minLength(6));

  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignupForm = this.formBuilder.group({
      emailsValidators: ['', [Validators.email, Validators.required]],
      culture: ['', Validators.required]
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'REQUIRED_FIELD' :
      this.email.hasError('email') ? 'REQUIRED_EMAIL' :
        this.userPasswordControl.hasError('minLength') ? 'PASSWORD_LENGHT' :
          '';
  }

  CreateUser() {
    this.auth.EmailRegistration(this.userEmail, this.userPassword);
  }

}
