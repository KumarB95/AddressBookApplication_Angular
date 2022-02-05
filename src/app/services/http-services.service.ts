import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {

  constructor(private httpClient: HttpClient) {
    
  }

  getAllAddressData(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + "/get");
  }

  deleteAddress(id : any): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + "/delete/"+id);
  }

  addAddressData(body: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl+"/create", body);
  }

  updateAddressData(id: number, value: any): Observable<Object> {
    return this.httpClient.put(environment.baseUrl+"/update/"+id,value);
  }
}
