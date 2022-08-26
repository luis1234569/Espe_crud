package espe.libreria.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public Book save(Book book){

        return bookRepository.save(book);
    }

    public Book findById(long id){
        return bookRepository.findById(id).orElse(new Book());
    }

    public Book update(Book book){
        return bookRepository.save(book);
    }

    public void deleteById(long id){
        bookRepository.deleteById(id);
    }

    public List<Book> findAll(){
        return bookRepository.findAll();
    }

    public List<Book> findByAutor(String term){
        return bookRepository.findByAutorLikeIgnoreCase(term + "%");
    }

    public List<Book> findByTittle(String term){
        return bookRepository.findByTittleLikeIgnoreCase(term + "%");
    }

    public List<Book> findByEditorial(String term){
        return bookRepository.findByEditorialLikeIgnoreCase(term + "%");
    }

    public List<Book> findByCreatedDate(String term){
        return bookRepository.findByCreatedDateLikeIgnoreCase(term + "%");
    }

    public List<Book> findByCategory(String term){
        return bookRepository.findByCategoryLikeIgnoreCase(term + "%");
    }


}