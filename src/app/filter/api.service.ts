import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from './constants';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json;charset=UTF-8',
    'Accept-Language': 'pt-BR',
    'x-api-key': Constants.API_KEY,
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${Constants.API_BASE_URL}${url}`, httpOptions);
  }

  getBlob(url: string): Observable<any> {
    return this.httpClient.get(`${Constants.API_BASE_URL}${url}`, {
      ...httpOptions,
      responseType: 'blob',
    });
  }

  post(url: string, data: any): Observable<any> {
    return this.httpClient.post(
      `${Constants.API_BASE_URL}${url}`,
      data,
      httpOptions
    );
  }

  put(url: string, data?: any): Observable<any> {
    return this.httpClient.put(
      `${Constants.API_BASE_URL}${url}`,
      data,
      httpOptions
    );
  }

  delete(url: string): Observable<any> {
    return this.httpClient.delete(
      `${Constants.API_BASE_URL}${url}`,
      httpOptions
    );
  }
}
