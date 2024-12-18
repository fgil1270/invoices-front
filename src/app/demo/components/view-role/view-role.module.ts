import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

import { ViewRoleRoutingModule } from './view-role-routing.module';
import { ViewRoleComponent } from './view-role.component';

@NgModule({
  imports: [
    CommonModule,
    ViewRoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    CheckboxModule
  ],
  declarations: [ViewRoleComponent]
})
export class ViewRoleModule { }
