import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudhaGoldComponent } from './sudha-gold/sudha-gold.component';
import { SudhaCowMilkComponent } from './sudha-cow-milk/sudha-cow-milk.component';
import { SudhaHeldiComponent } from './sudha-heldi/sudha-heldi.component';
import { SudhaShaktiComponent } from './sudha-shakti/sudha-shakti.component';
import { SudhaSmartComponent } from './sudha-smart/sudha-smart.component';
import { MenuComponent } from '../../menu/menu.component';

const routes: Routes = [
    {
    path: '',
    component: MenuComponent,
    children: [
    {
        path: 'milk/suhda-gold',
        component: SudhaGoldComponent,
    },
    {
        path: 'milk/cow-milk',
        component: SudhaCowMilkComponent,                
    },
    {
        path: 'milk/sudha-heldi',
        component: SudhaHeldiComponent,
    },
    {
        path: 'milk/sudha-shakti',
        component: SudhaShaktiComponent,
    },
    {
        path: 'milk/sudha-smart',
        component: SudhaSmartComponent,
    },
    ]}
]


@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class MilkRoutingModule { }