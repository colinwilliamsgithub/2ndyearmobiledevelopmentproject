import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  GetDictionaryData(word:string): Observable<any> {
    return this.http.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
  }
}
