import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './libro'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/book";

  public save(book: Book): Observable<Book>{
    return this.http.post<Book>(this.url+"/save", book, this.httpOptions);
  }

  public findById(id: number): Observable<Book>{
    return this.http.get<Book>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Book>{
    return this.http.delete<Book>(this.url+"/delete/"+id, this.httpOptions);
  }
  public findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url+"/list", this.httpOptions);
  }

  public findByAutor(term: string): Observable<Book[]>{
    console.log(term);
    return this.http.get<Book[]>(this.url+"/findByAutor/"+term, this.httpOptions);
  }

}
