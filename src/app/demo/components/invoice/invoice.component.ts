import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { DropdownFilterOptions } from 'primeng/dropdown';

import { Customer, Representative } from 'src/app/demo/api/customer';
import { InvoiceService } from '../../service/invoice.service';
import { SupplierService } from '../../service/supplier.service';
import { CustomerService } from '../../service/customer.service';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'], 
  providers: [MessageService]
})
export class InvoiceComponent implements OnInit {

  @ViewChild('filter') filter!: ElementRef;

  display: boolean = false;

  secondModal: boolean = false;
  oc: any[] = [];
  filteredOC: any[] = [];
  selectedOC: any[] = [];

  suppliers: any[] | undefined = [];
  filterSuppliers: any[] = [];
  selectedSuppliers: any[] = [];

  invoice: any;
  invoices: any[] = [];

  customers1: any[] = [];

  

  loading: boolean = true;

  representatives: any[] = [];

  statuses: any[] = [];

  activityValues: number[] = [0, 100];

  filterValue: string | undefined = '';

  constructor(
    private invoiceService: InvoiceService,
    private supplierService: SupplierService,
    private customerService: CustomerService, 
    private productService: ProductService,
    private fb: FormBuilder,
    private messageService: MessageService
  ) { }

  /* resetFunction(options: DropdownFilterOptions | undefined) {
      if (!options) {
          return;
      }
      options.reset();
      this.filterValue = '';
  }

  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
      options.filter(event);
  } */

  ngOnInit() {
    this.invoiceService.getAllInvoice().subscribe({
      next: (data) => {
        this.invoices = data;
        
      },
      error: (error) => {
        
      }
      
    })

    //serie
    //contable
    //numero proveedor
    //nombre proveedor
    //fecha
    //monto
    //anticipos
    //O.C.
    //C.C.
    //Rechazada
    //Referencia
    //pedimento
    //t.C.
    //ciec
    //acciones(pdf, comentarios)

    this.customerService.getCustomersLarge().then(customers => {
      
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
    });

    this.supplierService.getAllSupplier().subscribe({
      next: (data) => {
        
        this.suppliers = data;
        
      },
      error: (error) => {
        
      }
    })

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


  filterSupplier(event: any, idInvoice: number) {
    const filtered: any[] = [];
    const query = event.query;

    if (!this.suppliers) return;
    for (let i = 0; i < this.suppliers.length; i++) {
      
        const supplier = this.suppliers[i];
        if (Number(supplier.supplier_id) == Number(query)) {
            filtered.push(supplier);
        }
    }

    this.filterSuppliers = filtered;
  }

  filterOC(event: any) {
    const filtered: any[] = [];
    const query = event.query;
    for (let i = 0; i < this.oc.length; i++) {
        const country = this.oc[i];
        if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(country);
        }
    }

    this.filteredOC = filtered;
  }
  save(event: any, invoice: any) {
    
    this.invoice = invoice;
    if(event == "true"){
      
    }
    if (this.invoice.id) {
      this.invoices[this.findIndexById(this.invoice.id)].supplier = event;
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
    } 

    this.invoices = [...this.invoices];
    
    this.invoice = {};

  }

 
  //search invoice
  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.invoices.length; i++) {
          if (this.invoices[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  //sear supplier
  findIndexByIdSupplier(id: string): object {
    let index = -1;
    let supplier = {};
    if (!this.suppliers) return supplier;
    for (let i = 0; i < this.suppliers.length; i++) {
        if (this.suppliers[i].supplier_id === id) {
            supplier = this.suppliers[i];
            break;
        }
    }

    return supplier;
  }

}
