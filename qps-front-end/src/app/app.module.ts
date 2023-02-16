import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignOutComponent } from './user/sign-out/sign-out.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MobileMenuComponent } from './shared/layout/header/mobile-menu/mobile-menu.component';
import { NavMenuComponent } from './shared/layout/header/nav-menu/nav-menu.component';
import { HomeSliderComponent } from './home/home-slider/home-slider.component';
import { HomeCoursesComponent } from './home/home-courses/home-courses.component';
import { HomeBrandComponent } from './home/home-brand/home-brand.component';
import { HomeBlogComponent } from './home/home-blog/home-blog.component';
import { PageDownloadComponent } from './shared/layout/component/page-download/page-download.component';
import { PageGuidanceComponent } from './shared/layout/component/page-guidance/page-guidance.component';
import { PageActionComponent } from './shared/layout/component/page-action/page-action.component';
import { PageBannerComponent } from './shared/layout/component/page-banner/page-banner.component';
import { PageTestimonialComponent } from './shared/layout/component/page-testimonial/page-testimonial.component';
import { PageNotFoundComponent } from './shared/error/page-not-found/page-not-found.component';
import { PageForbiddenComponent } from './shared/error/page-forbidden/page-forbidden.component';

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
    PageForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }