import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../core/services/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {


  /*--------------------------------- serveses---------------------------------------------------------*/
  private _AuthS = inject(Auth)
  private _formBuilder = inject(FormBuilder)
  private _router = inject(Router)

  /*--------------------------------- create form controls---------------------------------------------------------*/
  // registerForm: FormGroup = new FormGroup({

  //   name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
  //   email: new FormControl(null, [Validators.email, Validators.required]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  //   rePassword: new FormControl(null, [Validators.required]),
  //   phon: new FormControl('', [Validators.pattern(/^01[0125][0-9]{8}$/), Validators.required]),
  // }, this.confirmPassword)
  /*--------------------------------- create form with new featr form builder---------------------------------------------------------*/

  registerForm: FormGroup = this._formBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]],
    email: [null, [Validators.email, Validators.required]],

    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
    rePassword: [null, [Validators.required]],
    phon: ['', [Validators.pattern(/^01[0125][0-9]{8}$/), Validators.required]],
  }, { validators: this.confirmPassword })

  /*--------------------------------- create comfirm password---------------------------------------------------------*/
  /**
   *create a function take 1 pramiter has type any or (form group but can be happen err, maybe use form control)
   *i wil use (abstruct group )
   */

  confirmPassword(g: AbstractControl) {
    if (g.get('password')?.value === g.get("rePassword")?.value) {
      return null;
    }
    else {
      return { misMatch: true }
    }

  }

  /*--------------------------------------------------get register form fun -------------------------*/
  errMassage: string = '';
  sucssesMsg: boolean = false;
  isLoding: boolean = false;
  rgisterSubmit(): void {
    this.isLoding = true;
    if (this.registerForm.valid) {
      this.isLoding = true;

      this._AuthS.registerForm(this.registerForm.value).subscribe({
        next: (response) => {
          // this.sucssesMsg=response.message
          if (response.message=='success') {
            setTimeout(() => {
              this.sucssesMsg=true
             this._router.navigate(['/login']);

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
      this.registerForm.setErrors({ misMatch: true })
      this.registerForm.markAllAsTouched()
      this.isLoding = false
    }
  }
}
