import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';
import * as moment from 'moment';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class TweetComponent implements OnInit {

  constructor(private tweet: TweetService,private tweetService: TweetService,config: NgbModalConfig, private modalService: NgbModal) { 
    config.backdrop = 'static';
		config.keyboard = false;
  }
  get: any;
  user_id: any;
  replyMessage:any;
  ngOnInit() {
    this.user_id = JSON.parse(localStorage.getItem('userId') || '{}');
    
    this.tweet.getAllTweets().subscribe(
      (response) => { this.get = response; },
      // (response) => { console.log(response); },
      (error) => { console.log(error); });
      
      
  }
  getTimeInAgoformat(date:Date) {
    if (date != null) {
      return moment(date).fromNow();
    }
    return "";
  }

  delete(del: String) {
    this.tweetService.deleteTweet(del).subscribe(
      (response) => {
        this.get = response;
        if (this.get.statusCode = 200) {
          alert("tweet Deleted");
          window.location.reload();
        }
      },
      (error) => { console.log(error); });


  }

  reply(id: String,message:any) {
    this.tweetService.replyTweet(id,message).subscribe(
      (response) => {
        this.get = response;
        if (this.get.statusCode = 200) {
          alert(" Replied Successfully");
        }
      },
      (error) => { console.log(error); });
      window.location.reload();
      this.ngOnInit();

  }

  like(id: String) {
    this.tweetService.likeTweet(id).subscribe(
      (response) => {
        this.get = response;
        if (this.get.statusCode = 200) {
          alert(" Liked Successfully");
          window.location.reload();
        }
      },
      (error) => { console.log(error); });
      window.location.reload();
      this.ngOnInit();

  }

  open(content:any) {
		this.modalService.open(content);
	}

  cancel(){
    
  }
  
}
