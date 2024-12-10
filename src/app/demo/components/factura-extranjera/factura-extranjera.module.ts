import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';


import { FacturaExtranjeraComponent } from './factura-extranjera.component';
import { ForeignInvoiceRoutingModule } from './factura-extranjera-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ForeignInvoiceRoutingModule,
    FormsModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    ToastModule
  ],
  declarations: [FacturaExtranjeraComponent]
})
export class FacturaExtranjeraModule { }
