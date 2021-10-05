import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenresResponse} from '../interfaces/genre';
import { ChartResponse } from '../interfaces/chart';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(
    private http: HttpClient
  ) { }

  getGenres() {
    return this.http.get<GenresResponse>('/api/genre');
  }

  getChart(genreId: number) {
    return this.http.get<ChartResponse>(`/api/chart/${genreId}`);
  }
}
