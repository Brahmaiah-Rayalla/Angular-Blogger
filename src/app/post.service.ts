import {Injectable, OnInit} from '@angular/core';
import 'rxjs/Rx';
import {map} from "rxjs/operators";
import {Observable} from 'rxjs/Observable';
import {Post} from './model/post.model';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PostService {

  posts: Post[];
  status: string = '';
  baseUrl = 'http://localhost:1234/user-portal/api/post';
  post: Post;

  constructor(private http: HttpClient) {

  }

  public getPosts() {
    return this.http.get<Post[]>(this.baseUrl);
  }

  public deletePost(post) {
    console.log(post.id);
    return this.http.delete(this.baseUrl + "/" + post.id);
  }

  public getPost(id) {
    return this.http.get<Post>(this.baseUrl + "/" + id);
  }

  public createPost(post): string {

    console.log('postService:' + post);
    this.http.post<Post>(this.baseUrl + "/", {
      "userName": post.userName,
      "postDate": Date.now().toString(),
      "postTitle": post.postTitle,
      "postDescription": post.postDescription
    })
      .subscribe(
      data => {
        console.log("PUT Request is successful ");
        this.status = "success";
      },
      error => {
        console.log("Rrror", error);
        this.status = "error";
      }
      );
    console.log('ststus' + this.status);
    //dummy data
    if (this.status == '' || this.status == 'error') {
      this.post = {
        id: this.posts.length + 1,
        userName: post.userName,
        postDate: Date.now().toString(),
        postTitle: post.postTitle,
        postDescription: post.postDescription
      };
      this.posts.push(post);
      this.status = 'success';
      console.log('posts' + this.posts);
    }
    return this.status;
  }

  public getDummyData() {

    return this.posts = [{
      id: 1,
      userName: 'Brahma',
      postDate: Date.now().toString(),
      postTitle: 'Angular Directives',
      postDescription: 'In this chapter, we will discuss what are Pipes in Angular 4. Pipes were earlier called filters in Angular1 and called pipes in Angular 2 and 4.'

      + '\n The | character is used to transform data. Following is the syntax for the same'

      + '\n {{ Welcome to Angular 4 | lowercase}}'
      + '\n It takes integers, strings, arrays, and date as input separated with | to be converted in the format as required and display the same in the browser.'
    },
    {
      id: 2,
      userName: 'Grahma',
      postDate: Date.now().toString(),
      postTitle: 'Angular Pipes',
      postDescription: 'In this chapter, we will discuss what are Pipes in Angular 4. Pipes were earlier called filters in Angular1 and called pipes in Angular 2 and 4.'

      + '\n The | character is used to transform data. Following is the syntax for the same'

      + '\n {{ Welcome to Angular 4 | lowercase}}'
      + '\n It takes integers, strings, arrays, and date as input separated with | to be converted in the format as required and display the same in the browser.'
    },
    {
      id: 3,
      userName: 'Frama',
      postDate: Date.now().toString(),
      postTitle: 'Angular Services',
      postDescription: 'In this chapter, we will discuss what are Pipes in Angular 4. Pipes were earlier called filters in Angular1 and called pipes in Angular 2 and 4.'

      + '\n The | character is used to transform data. Following is the syntax for the same'

      + '\n {{ Welcome to Angular 4 | lowercase}}'
      + '\n It takes integers, strings, arrays, and date as input separated with | to be converted in the format as required and display the same in the browser.'
    },
    {
      id: 4,
      userName: 'Hrama',
      postDate: Date.now().toString(),
      postTitle: 'Angular Components',
      postDescription: 'In this chapter, we will discuss what are Pipes in Angular 4. Pipes were earlier called filters in Angular1 and called pipes in Angular 2 and 4.'

      + '\n The | character is used to transform data. Following is the syntax for the same'

      + '\n {{ Welcome to Angular 4 | lowercase}}'
      + '\n It takes integers, strings, arrays, and date as input separated with | to be converted in the format as required and display the same in the browser.'
    }];
  }

}
