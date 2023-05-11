import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private http: HttpClient) { }

  //make a http call to an api to get data for the given word
  GetDictionaryData(word:string): Observable<any> {
    return this.http.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
  }
}
