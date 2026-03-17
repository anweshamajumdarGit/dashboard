import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrometheusService {

 private url = 'http://localhost:8081/actuator/prometheus';

 constructor(private http: HttpClient) {}

 getMetrics(){
   return this.http.get(this.url, { responseType: 'text' });
 }

}