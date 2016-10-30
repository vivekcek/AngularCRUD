import {Component} from '@angular/core'
import {Router} from '@angular/router'
@Component({
    moduleId:module.id,
    selector:'my-home',
    templateUrl:'home.html'
})

export class HomeComponent{
    Title:string='Home';
    
    constructor(private router:Router){

    }

    Go(value:string):void{
        let link=['/products',value];
        this.router.navigate(link);
    }
  
}