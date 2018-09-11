import {Post} from '../model/post.model';
import {PostService} from '../post.service';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LimitPipe} from '../pipes/limit.pipe';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  post: Post;
  status = '';
  clear;
  posts: Post[];
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
      this.posts = this.postService.getDummyData();
    }
  }

  deletePost(post) {
    this.postService.deletePost(post).subscribe(data => {
      this.posts = this.posts.filter(p => p !== post);
    });
  }

}
