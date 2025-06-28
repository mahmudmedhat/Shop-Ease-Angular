import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private _FormBuilder = inject(FormBuilder)
  private _Auth = inject(Auth)
  private _router = inject(Router)

  /**----------------------------------create login form------------------------------ */
  LoginForm = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  })

  /**----------------------------------create funcation to hold login form data------------------------------ */
  errMassage: string = '';
  sucssesMsg: boolean = false;
  isLoding: boolean = false;

  LoginSubmit(): void {
    this.isLoding = true;
    if (this.LoginForm.valid) {
      this.isLoding = true;

      this._Auth.setLoginForm(this.LoginForm.value).subscribe({
        next: (response) => {
          console.log(response);

          // this.sucssesMsg=response.message
          if (response.message=='success') {
            setTimeout(() => {
              this.sucssesMsg=true
              // seve tokan
              localStorage.setItem("userToken",response.token);
              // decoded tokan
              this._Auth.seveUserData();
             this._router.navigate(['/home']);

            }, 2000);
          }
          this.sucssesMsg =true,
          this.errMassage = ''
          this.isLoding = false;
        },
        error: (err: HttpErrorResponse) => {
          this.errMassage = err.error.message,
            console.log(err)
          this.sucssesMsg = false
          this.isLoding = false
        }
      })

    } else {
      this.LoginForm.setErrors({ misMatch: true })
      this.LoginForm.markAllAsTouched()
      this.isLoding = false
    }
  }


}
