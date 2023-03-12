import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignOutComponent} from './user/sign-out/sign-out.component';
import {FooterComponent} from './shared/layout/footer/footer.component';
import {MobileMenuComponent} from './shared/layout/header/mobile-menu/mobile-menu.component';
import {NavMenuComponent} from './shared/layout/header/nav-menu/nav-menu.component';
import {HomeSliderComponent} from './home/home-slider/home-slider.component';
import {HomeCoursesComponent} from './home/home-courses/home-courses.component';
import {HomeBrandComponent} from './home/home-brand/home-brand.component';
import {HomeBlogComponent} from './home/home-blog/home-blog.component';
import {PageDownloadComponent} from './shared/layout/component/page-download/page-download.component';
import {PageGuidanceComponent} from './shared/layout/component/page-guidance/page-guidance.component';
import {PageActionComponent} from './shared/layout/component/page-action/page-action.component';
import {PageBannerComponent} from './shared/layout/component/page-banner/page-banner.component';
import {PageTestimonialComponent} from './shared/layout/component/page-testimonial/page-testimonial.component';
import {PageNotFoundComponent} from './shared/error/page-not-found/page-not-found.component';
import {PageForbiddenComponent} from './shared/error/page-forbidden/page-forbidden.component';
import {CourseComponent} from './course/course.component';
import {ContactComponent} from './contact/contact.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {BlogComponent} from './blog/blog.component';
import {BlogListComponent} from './blog/blog-list/blog-list.component';
import {BlogDetailComponent} from './blog/blog-detail/blog-detail.component';
import {BlogSidebarComponent} from './blog/blog-sidebar/blog-sidebar.component';
import {ContactMapComponent} from './contact/contact-map/contact-map.component';
import {ContactInfoComponent} from './contact/contact-info/contact-info.component';
import {HttpClientModule} from "@angular/common/http";
import {AppConfig} from "./shared/service/appconfig.service";
import {AdminComponent} from './admin/admin.component';
import {AdminSidebarComponent} from './admin/layout/admin-sidebar/admin-sidebar.component';
import {AdminHeaderComponent} from "./admin/layout/admin-header/admin-header.component";
import {AdminBlogComponent} from "./admin/page/admin-blog/admin-blog.component";
import {AdminSliderComponent} from "./admin/page/admin-slider/admin-slider.component";
import {PaginationComponent} from './shared/component/pagination/pagination.component';
import {AdminUserComponent} from './admin/page/admin-user/admin-user.component';
import {AdminBlogCreateComponent} from './admin/page/admin-blog/admin-blog-create/admin-blog-create.component';
import {AdminBlogUpdateComponent} from './admin/page/admin-blog/admin-blog-update/admin-blog-update.component';
import {AdminSliderCreateComponent} from './admin/page/admin-slider/admin-slider-create/admin-slider-create.component';
import {AdminSliderUpdateComponent} from './admin/page/admin-slider/admin-slider-update/admin-slider-update.component';
import {AdminSliderDetailComponent} from './admin/page/admin-slider/admin-slider-detail/admin-slider-detail.component';
import {AdminUserCreateComponent} from "./admin/page/admin-user/admin-user-create/admin-user-create.component";
import {AdminUserUpdateComponent} from "./admin/page/admin-user/admin-user-update/admin-user-update.component";
import {AdminUserDetailComponent} from "./admin/page/admin-user/admin-user-detail/admin-user-detail.component";
import {HeaderComponent} from "./shared/layout/header/header.component";

const appConfigLoader = (appConfig: AppConfig) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent,
    NavMenuComponent,
    HomeSliderComponent,
    HomeCoursesComponent,
    HomeBrandComponent,
    HomeBlogComponent,
    PageDownloadComponent,
    PageGuidanceComponent,
    PageActionComponent,
    PageBannerComponent,
    PageTestimonialComponent,
    PageNotFoundComponent,
    PageForbiddenComponent,
    CourseComponent,
    BlogComponent,
    ContactComponent,
    CourseListComponent,
    CourseDetailComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogSidebarComponent,
    ContactMapComponent,
    ContactInfoComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminSliderComponent,
    PaginationComponent,
    AdminUserComponent,
    AdminBlogComponent,
    AdminBlogCreateComponent,
    AdminBlogUpdateComponent,
    AdminSliderCreateComponent,
    AdminSliderUpdateComponent,
    AdminSliderDetailComponent,
    AdminUserCreateComponent,
    AdminUserUpdateComponent,
    AdminUserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigLoader,
      multi: true,
      deps: [AppConfig]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
