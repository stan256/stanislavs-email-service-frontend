import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {EmailInterface} from 'src/app/shared/email.interface';
import {environment} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {
  }

  public sendEmail(emailData: EmailInterface): Observable<any> {
    return this.http.post(environment.baseUrl + '/api/emails/send', emailData);
  }
}
