import { Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { AppConfig, LayoutService } from './service/app.layout.service';

import { TokenService } from '../demo/service/token.service';
import { AuthService } from '../demo/service/auth.service';
import { EmployeeService } from '../demo/service/employee.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent implements OnInit {
    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

    @Input() public isLoggedIn: boolean = false;

    config!: AppConfig;

    subscription: any;
    user: any;
    lang: string = "";
    userLogin: any;
    employeeName: string = "" ; 

    constructor(
        public layoutService: LayoutService, 
        public el: ElementRef,
        private tokenService: TokenService,
        private authService: AuthService,
        private employeeService: EmployeeService
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(
            (config) => {
                this.config = config;
            }
        );
    }

    ngOnInit(){
        if (this.tokenService.getUser()) {
            this.isLoggedIn = true;
            this.user = this.tokenService.getUser();
            
            this.userLogin = JSON.parse(this.user);
            
            //obtenemos el nombre del empleado logueado
            this.employeeService.getEmployee(this.userLogin.idEmployee).subscribe({
              next: (resp) => {
                
                this.employeeName = resp.name;
              },
              error: (errorMsg) => {
                
              }
            });
            
          }
       
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    logout() {
        this.authService.logout();
    }
}
