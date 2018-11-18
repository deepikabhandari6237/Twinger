import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UserPostsComponent } from './user_posts/user.posts.component';
import { APIService } from './shared/api.service';
@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    HomeComponent,
    AlbumsComponent,
    PhotosComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
