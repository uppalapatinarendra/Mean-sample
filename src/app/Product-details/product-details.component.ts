import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-productdetails',
    templateUrl: './product-details.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProductDetailComponent implements OnInit{
    product ={};
    constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient){}

    ngOnInit(){
        this.getProductDetails(this.route.snapshot.params['id']);
    }

    getProductDetails(id){
       this.http.get('/product/'+id)
           .subscribe(data => {
               this.product = data;
           });
    }

    deleteProduct(id) {
        this.http.delete('/product/'+id)
          .subscribe(res => {
              this.router.navigate(['/products']);
            }, (err) => {
              console.log(err);
            }
          );
    }
    
}