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
      'http://localhost:8080/dictionary/',
      {
        params: {
          word
        }
      }).toPromise();
  }

  /**
   * Submits value of user score data to backend
   * @param userScore: input with username and score
   */
  public submitUserScore(userScore: UserScore): Promise<UserScore> {
    return this.httpClient.post<UserScore>(
      'http://localhost:8080/userScoreDetail/',
      userScore
    ).toPromise();
  }

  /**
   * Gets all user scores from the backend
   */
  public getAllScore(): Promise<Array<UserScore>> {
    return this.httpClient.get<Array<UserScore>>(
      'http://localhost:8080/userScoreDetail/'
    ).toPromise();
  }
}
