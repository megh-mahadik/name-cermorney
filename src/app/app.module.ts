import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CrudService } from './crud.service';
import { RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FeaturedComponent } from './featured/featured.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { FormValidationComponent } from './form-validation/form-validation.component';

const appRoutes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login1', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', component: FeaturedComponent },
  { path: 'validate', component: FormValidationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FeaturedComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
	FormValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,ReactiveFormsModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CrudService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
