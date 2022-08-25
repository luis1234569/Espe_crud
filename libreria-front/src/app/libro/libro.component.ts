import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")){
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }

  save(): void {
    this.bookService.save(this.initialValues)
      .subscribe(
        () => this.initialValues={
          libroId:0 ,
          isbn:"" ,
          tittle:"" ,
          autor:"" ,
          editorial:"" ,
          category:"" ,
          created_date: new Date()
        });
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
        console.log("Borrado");
        //redireccionar ....
      }
    )
  }

  

}
