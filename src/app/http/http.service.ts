import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import {
  Conversation,
  ConversationSummaryDto,
  CreateConversationRequestDto,
  User,
  UserConversationsDto,
} from '@core/types';

import { ENVIRONMENT_CONFIG, EnvironmentConfig } from '@env/environment.config';
import { makeInternalApiUrl } from '@testing/http/url';
import { Observable } from 'rxjs';

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

  getConservationListByUserId(userId: string): Observable<UserConversationsDto> {
    return this.http.get<UserConversationsDto>(makeInternalApiUrl(`users/${userId}/conversations`));
  }

  getConservationById(conversationId: string): Observable<Conversation> {
    return this.http.get<Conversation>(makeInternalApiUrl(`conversations/${conversationId}`));
  }

  createConversation(request: CreateConversationRequestDto): Observable<ConversationSummaryDto> {
    return this.http.post<ConversationSummaryDto>(makeInternalApiUrl('conversations'), request);
  }

  getFriends(userId: string): Observable<User[]> {
    return this.http.get<User[]>(makeInternalApiUrl(`users/${userId}/friends`));
  }

  getUser(email: string): Observable<User> {
    return this.http.get<User>(makeInternalApiUrl(`users/${email}`));
  }
}
