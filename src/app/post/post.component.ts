import {Post} from '../model/post.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private postService: PostService) {}
  post: Post;
  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams;
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams.id);
    this.postService.getPost(routeParams.id).subscribe(data => {this.post = data;});
    console.log(this.post);
    // get dummy data if post is null
    if (this.post == null) {
      this.postService.getDummyData().
        filter(x => x.id == routeParams.id).map(data => this.post = data);
    }
  }

}
