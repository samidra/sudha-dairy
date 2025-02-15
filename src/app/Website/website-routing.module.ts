import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlantsComponent } from './plants/plants.component';
import { MilkComponent } from './products/milk/milk.component';
import { MilkProductComponent } from './products/milk-product/milk-product.component';
import { LoginComponent } from '../login/login.component';
import { CareerComponent } from './career/career.component';
import { TenderComponent } from './tender/tender.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';

const routes: Routes = [

    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            },
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'plants',
                component: PlantsComponent,                
            },
            {
                path: 'contact',
                component: ContactUsComponent,
            },
            {
                path: 'milk',
                component: MilkComponent,
            },
            {
                path: 'milk-product',
                component: MilkProductComponent,
            },
            {
                path: 'career',
                component: CareerComponent,
            },
            {
                path: 'tender',
                component: TenderComponent,
            },
            {
                path: 'annual-report',
                component: AnnualReportComponent,
            },
        ]
        }
]


@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }