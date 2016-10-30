import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import{AppRoutingModule} from './app-routing.module'

import {AppComponent} from './app.component'
import {HomeComponent} from './home.component'
import {ProductListComponent} from './product-list.component'

@NgModule({
    imports:[BrowserModule,FormsModule,AppRoutingModule],
    declarations:[AppComponent,HomeComponent,ProductListComponent],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}