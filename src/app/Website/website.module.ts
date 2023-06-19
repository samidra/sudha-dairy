import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AboutRoutingModule } from './About/about-routing.module';
import { SudhaGoldComponent } from './products/milk/sudha-gold/sudha-gold.component';
import { SudhaCowMilkComponent } from './products/milk/sudha-cow-milk/sudha-cow-milk.component';
import { SudhaHeldiComponent } from './products/milk/sudha-heldi/sudha-heldi.component';
import { SudhaShaktiComponent } from './products/milk/sudha-shakti/sudha-shakti.component';
import { SudhaSmartComponent } from './products/milk/sudha-smart/sudha-smart.component';
import { PedaComponent } from './products/milk-product/peda/peda.component';
import { PlainDahiComponent } from './products/milk-product/plain-dahi/plain-dahi.component';
import { PaneerComponent } from './products/milk-product/paneer/paneer.component';
import { GheeComponent } from './products/milk-product/ghee/ghee.component';
import { RasgullaComponent } from './products/milk-product/rasgulla/rasgulla.component';
import { GulabJamunComponent } from './products/milk-product/gulab-jamun/gulab-jamun.component';
import { BalushahiComponent } from './products/milk-product/balushahi/balushahi.component';
import { SudhaKalakandComponent } from './products/milk-product/sudha-kalakand/sudha-kalakand.component';
import { SudhaMistiDoiComponent } from './products/milk-product/sudha-misti-doi/sudha-misti-doi.component';
import { SudhaRaskadamComponent } from './products/milk-product/sudha-raskadam/sudha-raskadam.component';




@NgModule({
  declarations: [
    AppComponent,
    SudhaGoldComponent,
    SudhaCowMilkComponent,
    SudhaHeldiComponent,
    SudhaShaktiComponent,
    SudhaSmartComponent,
    PedaComponent,
    PlainDahiComponent,
    PaneerComponent,
    GheeComponent,
    RasgullaComponent,
    GulabJamunComponent,
    BalushahiComponent,
    SudhaKalakandComponent,
    SudhaMistiDoiComponent,
    SudhaRaskadamComponent,
  
    

  ],
  imports: [
    BrowserModule,
    AboutRoutingModule,
    CommonModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
