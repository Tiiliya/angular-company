import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Res } from '../../core/response-type';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  _isSpinning: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      account: [ null, [ Validators.required, this.accountValidator ] ],
      password: [ null, [ Validators.required, Validators.minLength(6) ] ],
      remember: [ true ],
    });
  }
  
  accountValidator(account: FormControl): any {
    let value = account.value || ''
    let reg = /^[0-9a-zA-Z]+$/
    let valid = reg.test(value)
    return valid ? null : {
      accountValid: true
    }
  }

  _submitForm() {
    this._isSpinning = true;
    // console.log(this.loginForm.value)
    let data = this.loginForm.value
    this.http.get(`/JWebApi5/Assessment/Login?account=${data.account}&password=${data.password}`)
      .subscribe((res:Res) => {
        this._isSpinning = false;
        if(res.code === 0 && res.status){

          this.message.create('success','登录成功');
          setTimeout(_ => {
            this.router.navigate(['/home'])
          }, 2000);

        }
      })
  }
}
