import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';

import { RoleService } from '../../service/role.service';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { ProductService } from 'src/app/demo/service/product.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef;

  roles: any[] = [];

  loading: boolean = true;

  representatives: Representative[] = [];

  statuses: any[] = [];

  activityValues: number[] = [0, 100];

  constructor(
    private customerService: CustomerService, 
    private productService: ProductService,
    private roleService: RoleService
  ) { }

  ngOnInit() {
    this.roleService.getAllRole().subscribe({
      next: (roles) => {
        
        this.roles = roles;
        this.loading = false;
      },
      error: (errorMsg) => {

      }
      
      
    });

    
  /* this.customerService.getCustomersMedium().then(customers => this.customers2 = customers);
  this.customerService.getCustomersMedium().then(customers => this.customers3 = customers);
  this.customerService.getCustomersLarge().then(customers => this.customers4 = customers);
  this.productService.getProductsWithOrdersSmall().then(data => this.products = data); */

  this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'XuXue Feng', image: 'xuxuefeng.png' }
  ];

  this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
  ];
  }

  

  onGlobalFilter(table: Table, event: Event) {
    
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
