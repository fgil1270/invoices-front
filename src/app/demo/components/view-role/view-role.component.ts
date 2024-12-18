import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ViewService } from '../../service/view.service';
import { RoleService } from '../../service/role.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef;

  viewRoles: any[] = [];

  roles: any[] = [];

  display: boolean = false;

  loading: boolean = true;

  checked: boolean = true;

  constructor(
    private viewService: ViewService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.viewService.getAllView().subscribe({
      next: (viewRoles) => {

        this.viewRoles = viewRoles;
        this.loading = false;
      },
      error: (errorMsg) => {

      }
    });

    this.roleService.getAllRole().subscribe({
      next: (roles) => {
        this.roles = roles;

      },
      error: (errorMsg) => {

      }
    });
  }

  validRole(id: number, viewRoles: any): boolean {  
    let valid = viewRoles.find((role:any) => role.id === id);
    if(!valid) {
      return false;
    }
    return true;
    
  }

  onGlobalFilter(table: Table, event: Event) {
    
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onRoleChange(event: any, viewRole: any) {
    console.log("cambia")
    
  }

}
