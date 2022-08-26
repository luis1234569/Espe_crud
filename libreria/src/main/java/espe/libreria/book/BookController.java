package espe.libreria.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/book")
@CrossOrigin("*")
public class BookController {
    @Autowired
    BookService bookService;

    //CRUD

    //Create
    @PostMapping("/save")
    public Book save(@RequestBody Book book){
        return bookService.save(book);
    }

    //Read
    @GetMapping("/{id}")
    public Book findById(@PathVariable long id){
        return bookService.findById(id);
    }

    //Update
    @PutMapping("/update")
    public Book update(@RequestBody Book book)
    {
        return bookService.save(book);
    }

    //Delete
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable long id){
        bookService.deleteById(id);
    }

    //Listar
    @GetMapping("/list")
    public List<Book> findAll(){
        return bookService.findAll();
    }

    //Buscar sections
    @GetMapping("/findByAutor/{term}")
    public List<Book> findByAutor(@PathVariable String term){
        return bookService.findByAutor(term);
    }

    @GetMapping("/findByTittle/{term}")
    public List<Book> findByTittle(@PathVariable String term){
        return bookService.findByTittle(term);
    }

    @GetMapping("/findByEditorial/{term}")
    public List<Book> findByEditorial(@PathVariable String term){
        return bookService.findByEditorial(term);
    }

    @GetMapping("/findByCreatedDate/{term}")
    public List<Book> findByCreatedDate(@PathVariable String term){
        return bookService.findByCreatedDate(term);
    }

    @GetMapping("/findByCategory/{term}")
    public List<Book> findByCategory(@PathVariable String term){
        return bookService.findByCategory(term);
    }


}
