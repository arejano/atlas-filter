import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ApiClient } from './api.service';
import { HandleApiError } from './handleApiError';
import { FilterGetRequest, FilterRequestData } from './filter.models';

@Injectable({ providedIn: 'root' })
export class FiltroHistoricoLancamentos{
  constructor(
    private apiClient: ApiClient,
    private handleApiError: HandleApiError
  ) {}

  agrupamentos(filter:FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/agrupamento`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  anosLetivos(): Observable<FilterRequestData> {
    return this.apiClient
      .get(`/filter/anoletivo`)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  redes(filter: FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/rede`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  chamadas(ehAcessoCoordenador: boolean): Observable<FilterRequestData> {
    return this.apiClient
      .get(`/filter/chamada/` + ehAcessoCoordenador)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  escolas(filter: FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/escola`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  disciplinas(filter: FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/disciplina`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  avaliacoes(filter: FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/avaliacao`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  tipoAvaliacoes(filter: FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/tipoavaliacao`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }

  turmas(filter: FilterGetRequest): Observable<FilterRequestData> {
    return this.apiClient
      .post(`/filter/turma`, filter)
      .pipe(catchError(this.handleApiError.handleError<any>('FiltroHistoricoLancamentos')));
  }
}
