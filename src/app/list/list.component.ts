import { Component } from '@angular/core';
import { MindenService } from '../minden.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
regOszlop=[  "username","firstName","lastName","email","password"]
logOszlop=[  "username","password"]
registrationModel:any={
  "username": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": ""
}
loginModel:any={
  "username": "", 
  "password": ""
}
cegNev=""
companies:any
constructor(private minden:MindenService){
 
}
getCompanies(){
  this.minden.getCompanies().subscribe(
    (res)=>(this.companies=res)
  )
}

addCompany(){
  this.minden.addCompany(this.cegNev).subscribe(
    (res)=>console.log("Cég felvéve:",res)
  )
}


registration(){
  this.minden.registration(this.registrationModel).subscribe(
    {
      next:(res)=>console.log("OK: ",res),
      error:(res)=>console.log("HIBA: ",res),
    }
  )
}

login(){
  this.minden.login(this.loginModel).subscribe(
    {
      next:(res)=>{
        console.log("OK: ",res)
        localStorage.setItem("token", res)
      },
      error:(res)=>console.log("HIBA: ",res),
    }
  )
}
logout(){

  localStorage.removeItem("token")

}

}
