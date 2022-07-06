import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


const base_url = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class OnlyRoutesService {

  constructor(private http: HttpClient) { }

  getListCity() {
    return this.http.get<any>(base_url + '/api/flights/0');
  }

  getRoutes(level: number) {
    return this.http.get<any>(`${base_url}/api/flights/${level}`);
  }
}
