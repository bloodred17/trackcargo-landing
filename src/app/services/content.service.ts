import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  domain = environment.cms;

  constructor(
    private http: HttpClient
  ) { }

  getContent(route: string) {
    return this.http.get(`${this.domain}${route}`);
  }
}
