import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Score, UserScore} from '../../model/score';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  /**
   * Takes word as input and validates the word and calculates the score
   * @param word input
   */
  public validateWordAndCalculateScore(word: string): Promise<Score> {
    return this.httpClient.get<Score>(
      'https://boggle-spring.herokuapp.com/dictionary/',
      {
        params: {
          word
        }
      }).toPromise();
  }

  public submitUserScore(userScore: UserScore): Promise<UserScore> {
    return this.httpClient.post<UserScore>(
      'https://boggle-spring.herokuapp.com/userScoreDetail/',
      userScore
    ).toPromise();
  }

  public getAllScore(): Promise<Array<UserScore>> {
    return this.httpClient.get<Array<UserScore>>(
      'https://boggle-spring.herokuapp.com/userScoreDetail/'
    ).toPromise();
  }
}
