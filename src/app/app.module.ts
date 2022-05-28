import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SildeContainerComponent } from './main-loader/silde-container/silde-container.component';
import { ProductsComponent } from './main-loader/products/products.component';
import { ProductsContainerComponent } from './main-loader/products-container/products-container.component';
import { FormsModule } from '@angular/forms';
import { MainLoaderComponent } from './main-loader/main-loader.component';
import { MobliesComponent } from './moblies/moblies.component';
import { MenuHeaderComponent } from './header/menu-header/menu-header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { Service1Service } from './service/service1.service';
import { MyCartCountService } from './service/my-cart-count.service';
import { DisPricePipe } from './Pipes/dis-price.pipe';
import { DiscountedpipePipe } from './pipe1/discountedpipe.pipe';
import { PaymentComponent } from './auth/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuHeaderComponent,
    TopHeaderComponent,
    SildeContainerComponent,
    ProductsComponent,
    ProductsContainerComponent,
    MainLoaderComponent,
    MobliesComponent,
    DisPricePipe,
    DiscountedpipePipe,
    PaymentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [Service1Service,MyCartCountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
