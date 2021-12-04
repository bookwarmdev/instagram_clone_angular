import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPageComponent } from './pages/comment-page/comment-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'comment', component: CommentPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '**', component: HomePageComponent },  // Wildcard route for a 404 page
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
