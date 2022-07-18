import { NzDemoSelectScrollLoadComponent } from './components/nz-demo-select-scroll-load/nz-demo-select-scroll-load.component';
import { Component } from '@angular/core';
import { ColDef, GridOptions, NewValueParams } from 'ag-grid-community';
import { DataService } from './service/data.service';
import { map } from 'rxjs/operators';
import { TData } from './model/data';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-zorro';

  options: GridOptions = {

    columnDefs: [
      { field: 'make' },
      {
        field: 'model',
        editable: true,
        cellEditor: 'agRichSelectCellEditor',

        cellEditorParams: {
          values: []
        },

        // Rich select cell with fixed options by object
        // cellEditorParams: {
        //   values: [
        //     'Toyota',
        //     'Ford',
        //     'Porsche',
        //   ],
        // },

        // Rich select cell with fixed options by function
        // cellEditorParams: (event: any) => {
        //   return {
        //     values: [
        //       'Toyota',
        //       'Ford',
        //       'Porsche',
        //     ],
        //   };
        // },

        onCellValueChanged: (event: NewValueParams<TData>) => {
          this.message.info(`model is updated from "${event.oldValue}" to "${event.newValue}"`);
        },
      },
      {
        field: 'driver',
        editable: true,
        cellEditor: NzDemoSelectScrollLoadComponent,
        onCellValueChanged: (event: NewValueParams<TData>) => {
          this.message.info(`driver is updated from "${event.oldValue}" to "${event.newValue}"`);
        },
      },
      { field: 'price' },
    ],

    rowData: [
      { make: 'Toyota', model: 'Celica', driver: '', price: 35000 },
      { make: 'Toyota', model: 'Altis', driver: '', price: 30000 },
      { make: 'Ford', model: 'Mondeo', driver: '', price: 32000 },
      { make: 'Porsche', model: 'Boxster', driver: '', price: 72000 }
    ],

    defaultColDef: {
      sortable: true,
      filter: true,
    },

    // Options are loaded async after grid is ready.
    onGridReady: (event) => {
      const colDefs: ColDef<any>[] | undefined = this.options.api?.getColumnDefs();
      this.data.getModels().subscribe((models) => {
        if (colDefs?.length) {
          colDefs[1].cellEditorParams.values = models;
          this.options.api?.setColumnDefs(colDefs);
        }
      });
    },

    // Options are loaded async when cell is editing first time, so no option can be seen until the options are loaded completely.
    // onCellEditingStarted: (event) => {
    //   if (event.colDef.field === 'model') {
    //     this.data.getModels().subscribe((models) => {
    //       const colDefs: ColDef<any>[] | undefined = this.options.api?.getColumnDefs();
    //       if (colDefs?.length) {
    //         colDefs[1].cellEditorParams.values = models;
    //         this.options.api?.setColumnDefs(colDefs);
    //       }
    //     });
    //   }
    // },
  };

  constructor(
    public data: DataService,
    private message: NzMessageService,
  ) { }
}
