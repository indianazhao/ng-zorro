import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getModels(): Observable<string[]> {
    return of(['Celica', 'Altis', 'Mondeo', 'Boxster']);
  }
}
