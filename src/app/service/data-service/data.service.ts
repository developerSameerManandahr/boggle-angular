import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  private subject = new BehaviorSubject<T>({} as T);
  public currentData = this.subject.asObservable();

  constructor() {
  }

  public changeData(data: T) {
    this.subject.next(data);
  }
}
