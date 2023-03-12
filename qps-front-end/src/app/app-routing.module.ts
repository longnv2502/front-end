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
import {AdminSliderComponent} from "./admin/page/admin-slider/admin-slider.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminSliderDetailComponent} from "./admin/page/admin-slider/admin-slider-detail/admin-slider-detail.component";
import {AdminSliderCreateComponent} from "./admin/page/admin-slider/admin-slider-create/admin-slider-create.component";
import {AdminSliderUpdateComponent} from "./admin/page/admin-slider/admin-slider-update/admin-slider-update.component";

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
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'slider', component: AdminSliderComponent},
      {path: 'slider/:id/detail', component: AdminSliderDetailComponent},
      {path: 'slider/:id/create', component: AdminSliderCreateComponent},
      {path: 'slider/:id/update', component: AdminSliderUpdateComponent},
      {path: 'blog', component: BlogComponent},
      // {path: 'blog/:id/create', component: B},
      {path: 'blog/:id/update', component: AdminSliderUpdateComponent},
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
