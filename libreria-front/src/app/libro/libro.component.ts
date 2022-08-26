import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Book } from './libro';
import { BookService } from './libro.service';




@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
  ) {}

  initialValues: Book={
    libroId:0 ,
    isbn:"" ,
    tittle:"" ,
    autor:"" ,
    editorial:"" ,
    category:"" ,
    createdDate: new Date() 
  }
    
  ngOnInit(): void {
    // this.findAll();
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
    this.findAll();
  }

  save(): void {
    this.bookService.save(this.initialValues)
      .subscribe(
        () => {
          this.initialValues={
            libroId:0 ,
            isbn:"" ,
            tittle:"" ,
            autor:"" ,
            editorial:"" ,
            category:"" ,
            createdDate: new Date()
          };
          this.router.navigate(['/libro']);
        }
      );

  }

  allBooks: Book[] = [];

  findAll(): void {
    this.bookService.findAll().subscribe(
      (response) => {
        this.allBooks = response;
      }
    )
  }

  findById(id: number):void {
    this.bookService.findById(id).subscribe(
      (response) => {
        this.initialValues = response;
      }
    )
  }

  deleteById():void{
    this.bookService.deleteById(this.initialValues.libroId).subscribe(
      () => {
        this.router.navigate(['/libro']);
      }
    )
  }

  onInputAutor(term: string){
    console.log(term);
    if (term=="") {
      this.findAll();
    } else {
      this.bookService.findByAutor(term).subscribe(
        (response) => {
          this.allBooks = response;
        }
      )
    }
    
  }

  onInputTittle(term: string){
    console.log(term);
    if (term=="") {
      this.findAll();
    } else {
      this.bookService.findByTittle(term).subscribe(
        (response) => {
          this.allBooks = response;
        }
      )
    }
    
  }

  onInputEditorial(term: string){
    console.log(term);
    if (term=="") {
      this.findAll();
    } else {
      this.bookService.findByEditorial(term).subscribe(
        (response) => {
          this.allBooks = response;
        }
      )
    }
    
  }


  

  onInputCategoria(term: string){
    console.log(term);
    if (term=="") {
      this.findAll();
    } else {
      this.bookService.findByCategory(term).subscribe(
        (response) => {
          this.allBooks = response;
        }
      )
    }
    
  }

  onInputDate(term: string){
    console.log(term);
    if (term=="") {
      this.findAll();
    } else {
      this.bookService.findByCreatedDate(term).subscribe(
        (response) => {
          this.allBooks = response;
        }
      )
    }
    
  }


}
