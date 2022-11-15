import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetRequest } from 'src/app/model/tweet-request';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweetText!: String
  name!: String
  get: any
  constructor(private tweetservice: TweetService, private router: Router) { }

  ngOnInit(): void {
    this.name = JSON.parse(localStorage.getItem('userId') || '{}');
    this.router.navigate(["/post"]);
  }
  postTweet() {
    let tweetRequest = new TweetRequest(this.name, this.tweetText);
    this.tweetservice.postTweet(tweetRequest).subscribe(
      (response) => { 
        this.get = response; 
        console.log(this.get);
        
        if(this.get.statusCode="200"){
          alert("Tweet Saved");
          this.tweetText="";
          this.router.navigate(["/navbar"])
          window.location.reload();
          this.ngOnInit(); 
        }
      },

      (error) => { console.log(error); });
  }

}
