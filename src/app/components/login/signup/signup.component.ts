import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '@app/core/services/authentification/authentification.service';
import { environment } from '@env/environment';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userEmail: string;
  userPassword: string;
  signupForm: FormGroup;
  handler: any;
  amountToPay: number;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.minLength(6));

  formules = [
    { value: 'formule-1', viewValue: 'Formule 2 utilisateurs', amount: 499 },
    { value: 'formule-2', viewValue: 'Formule 4 utilisateurs', amount: 999 },
  ];

  constructor(private auth: AuthentificationService, private formBuilder: FormBuilder, public pmt: PaymentService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
    this.configHandler();
  }

  private configHandler() {
    this.handler = StripeCheckout.configure({
      key: environment.stripeKey,
      // tslint:disable-next-line:max-line-length
      image: 'data:image/png;base64,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',
      locale: 'auto',
      token: token => {
        // this.pmt.processPayment(token);
        if (token) {
          this.createUser();
        }
      }
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'REQUIRED_FIELD' :
      this.email.hasError('email') ? 'REQUIRED_EMAIL' :
        this.password.hasError('minLength') ? 'PASSWORD_LENGHT' :
          '';
  }

  createUser() {
    this.auth.EmailRegistration(this.userEmail, this.userPassword);
  }

  updateAmount(e) {
    this.amountToPay = e.amount;
  }

  openHandler() {
    this.handler.open({
      name: 'YFlix',
      excerpt: 'Aboonnement',
      amount: this.amountToPay
    });
  }

}
