import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoggerService {

  constructor() { }
  
  
  log (msg:any)
  {
    // let messageTOconsole=new Date() +"Message is : "+msg;
    console.log(new Date()+" : "+JSON.stringify(msg));
  }
}
export enum LogLevel{
  All=0,
  Debug=1,
  Info=2,
  Warn=3,
  Error = 4
}