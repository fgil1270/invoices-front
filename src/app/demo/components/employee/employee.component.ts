import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message, MessageService } from 'primeng/api';
import { FileUploadEvent, FileUploadHandlerEvent, FileSelectEvent } from 'primeng/fileupload';
//import { MessageService } from 'primeng/api';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { CustomerService } from 'src/app/demo/service/customer.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { EmployeeService } from '../../service/employee.service';

interface UploadFileEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService]
})
export class EmployeeComponent implements OnInit {

  @ViewChild('filter') filter!: ElementRef;

  display: boolean = false;

  secondModal: boolean = false;

  customers1: Customer[] = [];

  loading: boolean = true;

  representatives: Representative[] = [];

  statuses: any[] = [];

  activityValues: number[] = [0, 100];

  employeeForm: FormGroup;


  constructor(
    private customerService: CustomerService, 
    private productService: ProductService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private employeeService: EmployeeService
  ) { 
    this.employeeForm = this.fb.group({
      'name': ['', Validators.required],
      'employeeNumber': ['', Validators.required]  
    });
  }



  ngOnInit() {
    
    this.customerService.getCustomersLarge().then(customers => {
      this.customers1 = customers;
      this.loading = false;

      // @ts-ignore
      this.customers1.forEach(customer => customer.date = new Date(customer.date));
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

  uploadFileEmployee(event: FileUploadHandlerEvent){
    
    const subirFile: File = event.files[0];
    const formData = new FormData();
    

    formData.append('file', subirFile, subirFile.name);
        
    this.messageService.add({severity: 'success', summary: 'File Uploaded', detail: 'Employees created successfully'});
    event
    return
    this.employeeService.createEmployees(formData).subscribe({
      next: (response) => {

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
        
       
        
        

      },
      error: (error) => {

        this.messageService.add({severity: 'error', summary: 'Error', detail: 'File upload failed'});
      },
      complete: () => {
        
      }
    });
  }

  onUpload(event: any) {
    
    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  onError(event: any) {
    
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'File upload failed'});
  }

  onRemove(event: any) {
    
    this.messageService.add({severity: 'info', summary: 'File Removed', detail: ''});
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
