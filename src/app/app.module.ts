import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent} from './navbar/navbar.component';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { LimitPipe } from './pipes/limit.pipe';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    SidebarComponent,
    LimitPipe,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
