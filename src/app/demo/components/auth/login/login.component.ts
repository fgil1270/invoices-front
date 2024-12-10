import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { Message, MessageService } from 'primeng/api';
import { TokenService } from '../../../service/token.service';

@Component({
    templateUrl: './login.component.html',
    providers: [MessageService]
})
export class LoginComponent {
    rememberMe: boolean = false;
    userName: string = '';
    password: string = '';
    msgs: Message[] = [];

    constructor(
        private layoutService: LayoutService,
        private router: Router,
        private authService: AuthService,
        private tokenService: TokenService,
        private messageService: MessageService
    ) {}

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }



    login() {
        
        this.msgs = [];
           
        this.authService.login({name: this.userName, password: this.password}).subscribe({
            next: (resp) => { 
 
                this.tokenService.saveToken(resp.user.access_token, resp.user.user);
                this.router.navigate(['/dashboard']);
              
              
            },
            error: (errorMsg) => {

                this.messageService.add({severity:'error', summary:'Error', detail: errorMsg.error.message});
            }
        });

        
        
    }
}
