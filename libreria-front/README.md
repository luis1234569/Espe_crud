# LibreriaFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



<!-- <div class="filtro">
                                                        <div class="col-12 md:col-4 input">
                                                            <div class="p-inputgroup">
                                                                
                                                                <span class="p-inputgroup-addon">reporte del Fecha:</span>
                                                                <input #inputSearchDate class="" pInputText type="date" name="" placeholder="Buscar" id=""
                                                >
                                                                <button type="button" pButton pRipple icon="pi pi-search" styleClass="p-button-warn" (click)="onInputDate(inputSearchDate.value)"></button>   
                                                            </div>
                                                        </div>
                                                    </div> -->


onInputDate(term: string) {
    console.log(term);
    if (term == '') {
      this.findAll();
    } else {
      this.bookService.findByCreatedDate(term).subscribe((response) => {
        this.allBooks = response;
      });
    }
  }



    <!-- <p-card>
              <div class="table">
                <table class="">
                  <thead>
                    <tr>
                      <th>ISBN</th>
                      <th>Titulo</th>
                      <th>Autor</th>

                      <th>Editorial</th>
                      <th>Categoria</th>
                      <th>Fecha</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr *ngFor="let book of allBooks">
                      <td>{{ book.isbn }}</td>
                      <td>{{ book.tittle }}</td>
                      <td>{{ book.autor }}</td>
                      <td>{{ book.editorial }}</td>
                      <td>{{ book.category }}</td>
                      <td>{{ book.createdDate }}</td>
                      <td>
                        <a [routerLink]="[book.libroId]">
                          <i class="pi pi-user-edit"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </p-card> -->