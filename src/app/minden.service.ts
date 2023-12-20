import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MindenService {
  url="https://localhost:5001/api/"
  constructor(private http:HttpClient) { }

  registration(body:any){
    let reg="Authentication/registeration"
    return this.http.post(this.url+reg, body)
  }

  login(body:any){
    let log="Authentication/login"
    return this.http.post(this.url+log, body,{responseType:'text'})
  }

  getCompanies(){
    let token= localStorage.getItem("token")
    let header= new HttpHeaders().set('Authorization',"Bearer "+token)

    return this.http.get("https://localhost:5001/api/Companies", {headers:header})
  }

  addCompany(cegName:any){
    let body={name:cegName}
    let token= localStorage.getItem("token")
    let header= new HttpHeaders().set('Authorization',"Bearer "+token)
    return this.http.post("https://localhost:5001/api/Companies",body, {headers:header})
  }
}
