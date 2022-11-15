import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email !: string;
  userId !: string;
  password !: string;
  confirmPassword!: string;
  contactNumber !: string;
  dob!: string
  gender!: string
  usersList: Users[] = [];
  validForm: boolean = true;
  isEmail: boolean = false;
  isUsername: boolean = false;
  isPassword: boolean = false;
  errorMessage: any;
  currentStatus!: String;
  res: any;
  isSuccess: boolean = false;
  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.isSuccess = false;
    this.userService.getAllUsers().subscribe((data) => {
      this.res = data;
      this.usersList = this.res.data.slice();
    })

  }
  register() {
    this.userId = (Math.floor(Math.random()*100000) +1).toString();
    let user = new Users(this.firstName, this.lastName, this.email, this.userId, this.password, this.contactNumber);
    console.log(user);
    this.userService.registserUser(user).subscribe(data => {
      this.res = data;
      console.log("response"+ JSON.stringify(this.res));
      if (this.res.genericResponse === "UserName Registered Successfully") {
        this.isSuccess = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 5000);
      } else {
        this.isSuccess = false;
      }
    });

  }
  onCheckUsername() {

  }
  onKeyEmail() {
    this.isEmail = false;
    this.validForm = true;
    for (let i = 0; i < this.usersList.length; i++) {
      if (this.usersList[i].emailId === this.email) {
        this.isEmail = true;
        this.validForm = false;
      }
    }
  }
  onpass() {
    if(this.password!=null)
    {
    this.onCheckPassword()
    }

  }
  onCheckPassword() {
    this.validForm = true;
    this.isPassword = false;
    if (this.password != this.confirmPassword) {
      this.isPassword = true;
      this.validForm = false;
    }
  }

}
