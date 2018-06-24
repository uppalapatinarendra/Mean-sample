import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: 'product-edit.component.html',
    encapsulation: ViewEncapsulation.None
})

export class ProductEditComponent implements OnInit{
    product = {};

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.getProduct(this.route.snapshot.params['id']);
    }
  
    getProduct(id) {
      this.http.get('/product/'+id).subscribe(data => {
        this.product = data;
      });
    }
  
    updateProduct(id) {
      this.http.put('/product/'+id, this.product)
        .subscribe(res => {
            let id = res['_id'];
            this.router.navigate(['/product-details', id]);
          }, (err) => {
            console.log(err);
          }
        );
    }

}