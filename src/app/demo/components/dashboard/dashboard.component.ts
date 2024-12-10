import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Subscription, debounceTime } from 'rxjs';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppConfig } from 'src/app/layout/service/app.layout.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { TokenService } from '../../../../app/demo/service/token.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
   

    constructor(
        public layoutService: LayoutService,
        private productService: ProductService,
        private tokenService: TokenService,
        private router: Router
    ) {
        
    }

    ngOnInit() {
        //si no hay token redirigir a login
        if(!this.tokenService.getUser()){
            this.router.navigate(['/auth/login']);
        }

    }
    

    
}
