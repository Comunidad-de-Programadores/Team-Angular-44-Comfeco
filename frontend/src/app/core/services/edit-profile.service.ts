import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EditProfileService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get('http://restcountries.eu/rest/v2/all?fields=name;alpha3Code').pipe(
      map((response: any) => {
        return response.map((country) => ({
          id: country.alpha3Code,
          text: country.name,
        }));
      })
    );
  }
}
