import { Component } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-zorro';

  options: GridOptions = {

    columnDefs: [
      { field: 'make', rowGroup: true },
      { field: 'model' },
      { field: 'price' }
    ],

    rowData: [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Toyota', model: 'Altis', price: 30000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxster', price: 72000 }
    ],

    defaultColDef: {
      sortable: true,
      filter: true,
    },
  };

}
