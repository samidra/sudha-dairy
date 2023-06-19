import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { WebsiteRoutingModule } from './Website/website-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AdminRoutingModule } from './admin/admin/admin-routing.module';
import { AboutRoutingModule } from './Website/About/about-routing.module';
import { MilkRoutingModule } from './Website/products/milk/milk-routing.module';
import { MilkProductRoutingModule } from './Website/products/milk-product/milk-product-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './Website/menu/menu.component';
import { HomeComponent } from './Website/home/home.component';
import { PlantsComponent } from './Website/plants/plants.component';
import { MilkComponent } from './Website/products/milk/milk.component';
import { MilkProductComponent } from './Website/products/milk-product/milk-product.component';
import { ContactUsComponent } from './Website/contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HeaderComponent } from './admin/admin/layouts/header/header.component';
import { FooterComponent } from './admin/admin/layouts/footer/footer.component';
import { SidebarComponent } from './admin/admin/layouts/sidebar/sidebar.component';
import { DashboardComponent } from './admin/admin/dashboard/dashboard.component';
import { CollectionComponent } from './admin/admin/collection/collection.component';
import { UserComponent } from './admin/admin/user/user.component';
import { RoleComponent } from './admin/admin/role/role.component';
import { ReportComponent } from './admin/admin/report/report.component';
import { SettingComponent } from './admin/admin/setting/setting.component';
import { EmployeeComponent } from './admin/admin/employee/employee.component';
import { AttendenceComponent } from './admin/admin/attendence/attendence.component';
import { CareerComponent } from './Website/career/career.component';
import { TenderComponent } from './Website/tender/tender.component';
import { AnnualReportComponent } from './Website/annual-report/annual-report.component';
import { HistoryComponent } from './Website/About/history/history.component';
import { ManagementComponent } from './Website/About/management/management.component';
import { DirectMessageComponent } from './Website/About/direct-message/direct-message.component';
import { AwardsComponent } from './Website/About/awards/awards.component';
import { EkNazarComponent } from './Website/About/ek-nazar/ek-nazar.component';
import { ListOfBmcComponent } from './Website/About/list-of-bmc/list-of-bmc.component';
import { MarketingAreaComponent } from './Website/About/marketing-area/marketing-area.component';
import { OurProjectsComponent } from './Website/About/our-projects/our-projects.component';
import { OrganizationInformationComponent } from './Website/About/organization-information/organization-information.component';
import { TotalSocietyComponent } from './admin/admin/total-society/total-society.component';
import { TotalBmcComponent } from './admin/admin/total-bmc/total-bmc.component';
import { TotalUnitsComponent } from './admin/admin/total-units/total-units.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PlantsComponent,
    MilkComponent,
    MilkProductComponent,
    ContactUsComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CollectionComponent,
    UserComponent,
    RoleComponent,
    ReportComponent,
    SettingComponent,
    EmployeeComponent,
    AttendenceComponent,
    CareerComponent,
    TenderComponent,
    AnnualReportComponent,
    HistoryComponent,
    ManagementComponent,
    DirectMessageComponent,
    AwardsComponent,
    EkNazarComponent,
    ListOfBmcComponent,
    MarketingAreaComponent,
    OurProjectsComponent,
    OrganizationInformationComponent,
    TotalSocietyComponent,
    TotalBmcComponent,
    TotalUnitsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    WebsiteRoutingModule,
    LoginRoutingModule,
    AdminRoutingModule,
    AboutRoutingModule,
    MilkRoutingModule,
    MilkProductRoutingModule,
    YouTubePlayerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
