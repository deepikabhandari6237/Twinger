import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import {PostsComponent} from './posts/posts.component';
import { NgbdModalBasic } from './users/user.posts.component';


const routes: Routes = [{
   path:'',
   component: HomeComponent
   
},
{
   path:'albums',
   component: AlbumsComponent
   
},
{
   path:'photos',
   component: PhotosComponent
   
},
{
   path:'posts',
   component: PostsComponent
   
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
