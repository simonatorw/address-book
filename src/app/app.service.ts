import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = 'https://randomuser.me/api/?results=20';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  sortStr(a: any, b: any): number {
    if ( a.name.last < b.name.last ) {
      return -1;
    }

    if ( a.name.last > b.name.last ) {
      return 1;
    }

    return 0;
  }
}
