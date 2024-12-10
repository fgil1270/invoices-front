import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Customer, Representative } from 'src/app/demo/api/customer';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef;

  users: any[] = [];

  display: boolean = false;

  loading: boolean = true;

  representatives: Representative[] = [];

  userForm: FormGroup;

  roles: any[] = [];

  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) { 
    this.userForm = this.fb.group({
      'name': ['', Validators.required],
      'employeeNumber': ['', Validators.required]  
    });
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        console.log(users);
        this.users = users;
        this.loading = false;
      },
      error: (errorMsg) => {

      }
      
      
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
