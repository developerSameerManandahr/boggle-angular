import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Score} from '../../model/score';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public validateWordAndCalculateScore(word: string): Promise<Score> {
   return this.httpClient.get<Score>(
      'localhost:8080/api/v1/validate',
      {
        params: {
          word
        }
      }).toPromise();
  }
}
