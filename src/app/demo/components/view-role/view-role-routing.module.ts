import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewRoleComponent } from './view-role.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: ViewRoleComponent }]),
    ],
    exports: [RouterModule],
})

export class ViewRoleRoutingModule { }