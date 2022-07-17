import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICellEditorParams } from 'ag-grid-community';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-nz-demo-select-scroll-load',
  templateUrl: './nz-demo-select-scroll-load.component.html',
  styleUrls: ['./nz-demo-select-scroll-load.component.scss']
})
export class NzDemoSelectScrollLoadComponent implements OnInit {
  randomUserUrl = 'https://api.randomuser.me/?results=10';
  optionList: string[] = [];
  selectedUser = '';
  isLoading = false;

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
}
