import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup = new FormGroup(
    {
      email: new FormControl(),
      password: new FormControl()
    }
  )
  constructor(private _loginService:LoginService,private _router:Router){}
  Submit(){
    console.log(this.loginForm);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login succesful");
        sessionStorage.setItem("my-app-token",data.tokrn);
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Invalid email or password");
      }
    )
  }


}
