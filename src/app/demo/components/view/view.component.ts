import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Table } from 'primeng/table';

import { ViewService } from '../../service/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @ViewChild('filter') filter!: ElementRef;

  views: any[] = [];
  
  loading: boolean = true;


  constructor(
    private viewService: ViewService
  ) { }

  ngOnInit() {
    this.viewService.getAllView().subscribe({
      next: (views) => {
        
        this.views = views;
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
