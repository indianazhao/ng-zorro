import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-nz-demo-select-scroll-load',
  templateUrl: './nz-demo-select-scroll-load.component.html',
  styleUrls: ['./nz-demo-select-scroll-load.component.scss']
})
export class NzDemoSelectScrollLoadComponent implements OnInit, ICellEditorAngularComp {
  private params: any;

  randomUserUrl = 'https://api.randomuser.me/?results=10';
  optionList: string[] = [];
  selectedUser = '';
  isLoading = false;
  open = false;

  /* eslint-disable @typescript-eslint/no-explicit-any */
  getRandomNameList: Observable<string[]> = this.http
    .get(`${this.randomUserUrl}`)
    .pipe(
      catchError(() => of({ results: [] })),
      map((res: any) => res.results)
    )
    .pipe(map((list: any) => list.map((item: any) => `${item.name.first}`)));

  loadMore(): void {
    this.isLoading = true;
    this.getRandomNameList.subscribe(data => {
      this.isLoading = false;
      this.optionList = [...this.optionList, ...data];
    });
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadMore();
  }

  // -------- Implement Interface of ICellEditorAngularComp --------
  agInit(params: ICellEditorParams<any, any>): void {
    this.params = params;
    this.setUser(params.value);
  }

  getValue() {
    return this.selectedUser;
  }

  // A hook to perform any necessary operation just after the GUI for this component has been rendered on the screen.
  // This method is called each time the edit component is activated.
  // This is useful for any logic that requires attachment before executing, such as putting focus on a particular DOM element.
  afterGuiAttached(): void {
    // open dropdown once the custom component has been rendered
    this.open = true;
  };

  // -------- Methods for cell editor --------
  setUser(user: string) {
    this.selectedUser = user;
  }

  onSelect(event: any) {
    this.params.api.stopEditing();
  }

}
