import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Conversation } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  makeInternalApiUrl(relativeUrl: string) {
    return `${environment.apiUrl}/${relativeUrl}`;
  }

  getConservationByUserId(userId: string): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(this.makeInternalApiUrl(`conservation/${userId}`));
  }
}
