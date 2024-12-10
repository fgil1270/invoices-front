import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FacturaExtranjeraComponent } from './factura-extranjera.component';

@NgModule({
    imports: [
        RouterModule.forChild([{ path: '', component: FacturaExtranjeraComponent }])
    ],
    exports: [RouterModule],
})

export class ForeignInvoiceRoutingModule { }