import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course/course-list/course-list.component";
import {CourseDetailComponent} from "./course/course-detail/course-detail.component";
import {ContactComponent} from "./contact/contact.component";
import {BlogComponent} from "./blog/blog.component";
import {BlogListComponent} from "./blog/blog-list/blog-list.component";
import {BlogDetailComponent} from "./blog/blog-detail/blog-detail.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [
      {path: '', component: CourseListComponent},
      {path: ':id', component: CourseDetailComponent}
    ]
  },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {path: '', component: BlogListComponent},
      {path: ':id', component: BlogDetailComponent}
    ]
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
