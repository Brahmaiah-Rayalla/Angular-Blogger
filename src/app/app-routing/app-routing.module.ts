import {ContactComponent} from '../contact/contact.component';
import {HomeComponent} from '../home/home.component';
import {PostComponent} from '../post/post.component';
import {PostsComponent} from '../posts/posts.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Router, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'app-home', component: HomeComponent},
  {
    path: 'app-posts',
    children: [
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'app-post/:id',
        component: PostComponent
      },
      /*{
       path: 'app-post/:id/app-posts',
       component: PostsComponent
     }*/
    ]
  },
  {path: 'app-contact', component: ContactComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

  declarations: []
})
export class AppRoutingModule {}
