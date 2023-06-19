import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../../menu/menu.component';
import { PedaComponent } from './peda/peda.component';
import { PlainDahiComponent } from './plain-dahi/plain-dahi.component';
import { PaneerComponent } from './paneer/paneer.component';
import { GheeComponent } from './ghee/ghee.component';
import { RasgullaComponent } from './rasgulla/rasgulla.component';
import { GulabJamunComponent } from './gulab-jamun/gulab-jamun.component';
import { BalushahiComponent } from './balushahi/balushahi.component';
import { SudhaKalakandComponent } from './sudha-kalakand/sudha-kalakand.component';
import { SudhaMistiDoiComponent } from './sudha-misti-doi/sudha-misti-doi.component';
import { SudhaRaskadamComponent } from './sudha-raskadam/sudha-raskadam.component';

const routes: Routes = [
    {
    path: '',
    component: MenuComponent,
    children: [
    {
        path: 'milk-product/peda',
        component: PedaComponent,
    },
    {
        path: 'milk-product/plain-dahi',
        component: PlainDahiComponent,                
    },
    {
        path: 'milk-product/paneer',
        component: PaneerComponent,
    },
    {
        path: 'milk-product/ghee',
        component: GheeComponent,
    },
    {
        path: 'milk-product/rasgulla',
        component: RasgullaComponent,
    },
    {
        path: 'milk-product/gulab-jamun',
        component: GulabJamunComponent,
    },
    {
        path: 'milk-product/balushahi',
        component: BalushahiComponent,                
    },
    {
        path: 'milk-product/sudha-kalakand',
        component: SudhaKalakandComponent,
    },
    {
        path: 'milk-product/sudha-misti-doi',
        component: SudhaMistiDoiComponent,
    },
    {
        path: 'milk-product/sudha-raskadam',
        component: SudhaRaskadamComponent,
    },
    ]}
]


@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class MilkProductRoutingModule { }