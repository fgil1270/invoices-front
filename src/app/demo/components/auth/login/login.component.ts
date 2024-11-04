import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    rememberMe: boolean = false;

    constructor(
        private layoutService: LayoutService,
        private router: Router
    ) {}

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }

    login() {
        this.router.navigate(['/dashboard']);
    }
}
