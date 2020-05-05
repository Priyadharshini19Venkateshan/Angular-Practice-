import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorPipe } from './floor.pipe';
import { ReversePipe } from './reverse.pipe';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DepartmentModule } from './department/department.module';
import { ProductModule } from './product/product.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FloorPipe,
    ReversePipe,
    OrderComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    NotfoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    DepartmentModule,
    ProductModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
