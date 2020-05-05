import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { OrderComponent } from './order/order.component'
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component'
import { AboutComponent } from './about/about.component'
//import { NotfoundComponent } from './notfound/notfound.component'



const routes: Routes = [ {path:'order', component:OrderComponent,canActivate:[AuthGuard] },
  {path:'login', component:LoginComponent }
  //{path:'home/:name', component: HomeComponent }
 // {path:'order/:id', component:OrderComponent }
//{path:'',redirectTo:'home',pathMatch:'full'},
,{path:'home', component: HomeComponent },
{path:'blog', component:BlogComponent },
{path:'about', component:AboutComponent },
//{path:'**', component:NotfoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
