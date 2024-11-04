import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppConfig } from 'src/app/layout/service/app.layout.service';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
   

    constructor(
        public layoutService: LayoutService,
        private productService: ProductService
    ) {
        
    }

    ngOnInit() {
        
        
    }
    

    
}
