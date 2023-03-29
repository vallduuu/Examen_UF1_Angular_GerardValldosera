import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FitxersAngular';
  // @ts-ignore
   constructor(private http:HttpClient) {

     //EX1
     this.http.post<any>("http://localhost:3000/api/ex1", {}).subscribe();

     //EX2
     this.http.post<any>("http://localhost:3000/api/ex2", {}).subscribe();

     //EX3
     this.http.post<any>("http://localhost:3000/api/ex3", {}).subscribe();

     //EX4
     this.http.post<any>("http://localhost:3000/api/ex4", {}).subscribe();
    }
}
