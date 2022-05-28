import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoaderComponent } from './main-loader/main-loader.component';
import { MobliesComponent } from './moblies/moblies.component';


const routes: Routes = [
  {path:"",component:MainLoaderComponent},
  {
    path:"moblies",component : MobliesComponent
  },
  {
    path:"signin",loadChildren:()=>import('./signin/signin.module').then(m => m.SigninModule)
  },
  {
    path:"buy",loadChildren: () => import('./buy/buy.module').then(b=>b.BuyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
