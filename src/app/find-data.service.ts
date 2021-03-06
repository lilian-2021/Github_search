import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { User } from './user';
import { Userrepo } from './userrepo';
@Injectable({
  providedIn: 'root'
})
export class FindDataService {
  user!:User

  findData(name:string){
    interface Apiresponse{
    login:string,
        name:string,
        bio:string,
        html_url:string,
        created_at:Date ,
        public_repos:number,
        followers:number,
        following:number
    }

let promise:any= new Promise<void>((resolve,rejects)=>{
  this.httpClient.get<Apiresponse>('https://api.github.com'+/users/+name).toPromise().then(response=>{
    this.user.login= response!.login
    this.user.name= response!.name
    this.user.bio= response!.bio
    this.user.html_url= response!.html_url
    this.user.created_at= response!.created_at
    this.user.public_repos= response!.public_repos
    this.user.followers= response!.followers
    this.user.following= response!.following
  },
  error=>{
    console.log("error")
  }
  )
  return promise
 
})
}

constructor( private httpClient:HttpClient) {
this.user=new User("","","","",new Date(),0,0,0)

}


  

 
}
