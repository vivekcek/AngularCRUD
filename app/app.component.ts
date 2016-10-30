
import { Component} from '@angular/core'

@Component({
    moduleId:module.id,
    selector:'my-app',
    template:`
    <h1>{{Title}}</h1>
    <nav>
    <a routerLink='/home'>Home</a>
    <a [routerLink]="['/products','test']">Products</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent{
    Title:string='Routing Demo';
}