import { Component, OnInit } from '@angular/core';
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
    created_date: new Date() 
  }
    
  ngOnInit(): void {
    this.findAll();
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
            created_date: new Date()
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

  

}
