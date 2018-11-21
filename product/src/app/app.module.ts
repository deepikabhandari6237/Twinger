import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { NgbdModalBasic } from './users/user.posts.component';
import {UsersComponent} from './users/users.component';

import { APIService } from './shared/api.service';
@NgModule({
  declarations: [
    AppComponent,   
    HeaderComponent,
    HomeComponent,
    AlbumsComponent,
    PhotosComponent,
    FooterComponent,
    UsersComponent,
    NgbdModalBasic,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
