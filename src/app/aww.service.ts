import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Aww {
  kind:string;
  data:Data;
}
interface Data {
  children:Children[];
}
interface Children {
  data:Cdata;
}

interface Cdata {
  title:string;
  thumbnail:string;
  permalink:string;
}

@Injectable({
  providedIn: 'root'
})
export class AwwService {
  apiURL = "https://www.reddit.com/r/aww/.json";
  constructor(public client: HttpClient) {}
  
  getPosts(){
    return this.client.get<Aww>(this.apiURL);
  }
}
