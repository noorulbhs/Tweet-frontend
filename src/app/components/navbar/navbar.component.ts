import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openTweets(){
    this.router.navigate(['navbar/tweets']);
  }
  showAllUsers(){
    this.router.navigate(['navbar/allUsers']);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/logout']);
  }
  postTweet(){
    this.router.navigate(['/post']);
  }
}
