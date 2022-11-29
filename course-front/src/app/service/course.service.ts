import { Course } from './../interface/course';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  }

  private url: string = "http://localhost:8080/course";

  public save(course: Course): Observable<Course> {
    return this.http.post<Course>(this.url + "/save", course, this.httpOptions)
  }

  public findAll(): Observable<Course[]>{
    return this.http.get<Course[]>(this.url+"/list",this.httpOptions)
  }

  public deleteById(id: number):Observable<Course>{
    return this.http.delete<Course>(this.url+"/"+id,this.httpOptions)
  }

  public findById(id: number): Observable<Course>{
    return this.http.get<Course>(this.url+"/"+id, this.httpOptions);
  }
}
