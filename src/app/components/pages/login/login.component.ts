import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errMsg = "";
  isLoginFailed = false;
  isLogin = false;
  constructor(private service: UserService, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()){
      this.isLogin = true;
    }
    else{
      this.loginForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      });
    }
  }

  doLogin(){
    let login = {
      email: this.loginForm.value.email,
      password :this.loginForm.value.password
    };
    // alert("Email: " + login.email +"Password: " +  login.password)
    this.service.login(login).subscribe((res)=>{
        this.tokenStorage.saveToken(res.token);
        this.tokenStorage.saveUser(res.userCredentials);
        location.reload();
      },
      err => {
        this.errMsg = err.error.msg;
        this.isLoginFailed = true;
        console.log(err);
      }
    );
  }

}
