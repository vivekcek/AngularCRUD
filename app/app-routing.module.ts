import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router'

import { HomeComponent } from './home.component'
import {ProductListComponent} from './product-list.component'

const routes:Routes=[
    { path:'', redirectTo:'/home', pathMatch:'full' },
    { path:'home', component:HomeComponent },
    {path:'products/:value', component:ProductListComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}