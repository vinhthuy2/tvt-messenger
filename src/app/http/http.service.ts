import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENVIRONMENT_CONFIG, EnvironmentConfig } from '../../environments/environment.config';
import { makeInternalApiUrl } from '../../testing/http/url';
import { Conversation, User } from '../core/types';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  apiBaseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject(ENVIRONMENT_CONFIG) environmentConfig: EnvironmentConfig,
  ) {
    this.apiBaseUrl = environmentConfig.apiBaseUrl;
  }

  getConservationByUserId(userId: string): Observable<Conversation[]> {
    return this.http.get<Conversation[]>(makeInternalApiUrl(`conservation/${userId}`));
  }

  getConservationById(conversationId: string): Observable<Conversation> {
    return this.http.get<Conversation>(makeInternalApiUrl(`conservation/${conversationId}`));
  }

  createConversation(conversation: Conversation): Observable<string> {
    return this.http.post<string>(makeInternalApiUrl('conservation'), conversation);
  }

  getFriends(userId: string): Observable<User[]> {
    return this.http.get<User[]>(makeInternalApiUrl(`friends/${userId}`));
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(makeInternalApiUrl(`users/${userId}`));
  }
}
