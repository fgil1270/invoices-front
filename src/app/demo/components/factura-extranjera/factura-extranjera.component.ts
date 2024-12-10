import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FileUploadHandlerEvent, FileBeforeUploadEvent } from 'primeng/fileupload';
import { format } from 'date-fns';

import { SupplierService } from '../../service/supplier.service';
import { InvoiceService } from '../../service/invoice.service';

@Component({
  selector: 'app-factura-extranjera',
  templateUrl: './factura-extranjera.component.html',
  styleUrls: ['./factura-extranjera.component.css'],
  providers: [DialogService, MessageService, SupplierService]
})
export class FacturaExtranjeraComponent implements OnInit {
  visible: boolean = false;
  fecha: any;
  currency: any[];
  suppliers: any[] = [];
  file: any;
  noInvoice: string = '';
  oc: any;
  reference: any;
  tax: number = 0;
  amount: number = 0;

  value1: any;
  value2: any;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private supplierService: SupplierService,
    private invoiceService: InvoiceService
  ) { 
    this.currency = [
      {name: 'USD', code: 'USD'},
      {name: 'EUR', code: 'EUR'},
      {name: 'MXN', code: 'MXN'},
    ];

  }

  ngOnInit() {
    
    this.visible = true;
    this.getSuppplier();
  }

  save(){
    //this.visible = false;
    let data = {
      date: format(this.fecha, 'yyyy-MM-dd'),
      currency: this.value1,
      supplier: this.value2,
      invoice_number: this.noInvoice != '' ? this.noInvoice : null,
      oc: this.oc != '' ? this.oc : null,
      reference: this.reference != '' ? this.reference : null,
      tax: this.tax,
      amount: this.amount
    }
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('date', format(this.fecha, 'yyyy-MM-dd')); //no mayor a hoy
    formData.append('currency', this.value1.name);
    formData.append('supplier', this.value2.code);
    
    formData.append('invoice_number', this.noInvoice); // 45 o 55 10 digitos
    formData.append('oc', this.oc != '' ? this.oc : 0);
    formData.append('reference', this.reference != '' ? this.reference : null); 
    formData.append('tax', this.tax.toString());
    formData.append('amount', this.amount.toString());  

        
    this.invoiceService.postForeignInvocie(formData, formData).subscribe({
      next: (resp) => {
        
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      },
      error: (error) => {
        
        this.messageService.add({severity:'error', summary: 'Error', detail: error.error.message});
      }
    });
    //this.router.navigate(['/dashboard']);
  }

  cancel(){
    this.visible = false;
    this.router.navigate(['/dashboard']);
  }

  onBasicUpload(event: any) {
    
    this.file = event.currentFiles[0];
    const formData = new FormData();

    
  }

  getSuppplier(){
    this.supplierService.getAllSupplier().subscribe({
      next: (resp) => {
        let datos = resp.map((supplier: any) => {
          return {
            name: supplier.supplier_id + '-' + supplier.name_supplier_1,
            code: supplier.id
          }
        });
        this.suppliers = datos;
        
        
      },
      error: (error) => {
        
      }
    });
  }

}
