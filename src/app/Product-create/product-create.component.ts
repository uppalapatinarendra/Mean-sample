import { Component, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create',
    templateUrl: './product-create.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProductCreateComponent{

    product = {};

    constructor(private http: HttpClient, private router: Router){
        
    }

    saveBook(){
        this.http.post('/product', this.product)
            .subscribe(res =>{
                this.router.navigate(['/products']);
            }, (err) =>{
                console.log(err);
            }
        );
    }
    
}