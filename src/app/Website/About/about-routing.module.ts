import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { HistoryComponent } from './history/history.component';
import { ManagementComponent } from './management/management.component';
import { DirectMessageComponent } from './direct-message/direct-message.component';
import { AwardsComponent } from './awards/awards.component';
import { EkNazarComponent } from './ek-nazar/ek-nazar.component';
import { ListOfBmcComponent } from './list-of-bmc/list-of-bmc.component';
import { MarketingAreaComponent } from './marketing-area/marketing-area.component';
import { OrganizationInformationComponent } from './organization-information/organization-information.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';


const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: 'aboutus/our-history',
                component:HistoryComponent,
            },
            {
                path: 'aboutus/management',
                component:ManagementComponent,
            },
            {
                path: 'aboutus/direct-message',
                component:DirectMessageComponent,
            },
            {
                path: 'aboutus/awards',
                component:AwardsComponent,
            },
            {
                path: 'aboutus/ek-nazar',
                component:EkNazarComponent,
            },
            {
                path: 'aboutus/list-of-bmc',
                component:ListOfBmcComponent,
            },
            {
                path: 'aboutus/marketing-area',
                component:MarketingAreaComponent,
            },
            {
                path: 'aboutus/organization-information',
                component:OrganizationInformationComponent,
            },
            {
                path: 'aboutus/our-projects',
                component:OurProjectsComponent,
            },
 ] }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }