import {Component, OnInit} from '@angular/core';
import {Post} from '../model/post.model';
import {PostService} from '../post.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post: Post;
  status :string = '';
  clear;
  posts: Array<any>;
  p: number = 1;

  constructor(private router: Router, private postService: PostService) {
    this.post = new Post();
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => {
        this.posts = data;
      });
    console.log(this.posts);
    if (this.posts == null) {
      this.posts = this.postService.getDummyData().sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        } else if (a.id < b.id) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }

  createPost() {
    console.log('createPost:');
    this.status = this.postService.createPost(this.post);
    console.log('status:' + this.status);
    //this.reset();
  }

  reset() {
    this.post.userName = '';
    this.post.postTitle = '';
    this.post.postDescription = '';
  }

}
