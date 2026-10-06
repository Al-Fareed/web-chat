import { Component } from '@angular/core';
import { FeedPost } from './feed.model';
import { FeedService } from './feed.service';
import { Cards } from '../../components/cards/cards';
import { OrdinalDatePipe } from '../../pipes/ordinal-date.pipe';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-feed',
  imports: [Cards,OrdinalDatePipe,Navbar],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {

  blog:string="";
  image:string=""

  feeds: FeedPost[] = [];
  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.getUserFeeds()
  }
  
  getUserFeeds(){
    this.feedService.getFeed().subscribe((res) => {
      this.feeds = res;
    })
  }
  postBlog(){
    this.feedService.createPost(this.blog,this.image).subscribe((res)=>{
      console.log(res);
    })
  }

}
