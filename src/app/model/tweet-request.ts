export class TweetRequest {
    userName!: String
    tweet!: String

    constructor(userName: String, tweet: String) {
        this.tweet = tweet;
        this.userName = userName;

    }
}