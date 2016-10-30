import {Component,OnInit} from '@angular/core'
import{ActivatedRoute,Params} from '@angular/router'
import{Location} from '@angular/common'
@Component({
    moduleId:module.id,
    selector:'product-list',
    templateUrl:'products.html'
})

export class ProductListComponent implements OnInit{
    Title:string='Product List';
    Input:string;
    constructor(private router:ActivatedRoute,
    private location:Location){}

    ngOnInit():void{
        this.router.params.forEach((params:Params)=>{
            
            this.Input=params['value'];
          
        })
    }

    goBack():void{
        this.location.back();
    }
}