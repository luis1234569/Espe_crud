package espe.libreria.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {
    @Autowired
    BookRepository bookRepository;

    public List<Book> findAll(){
        return bookRepository.findAll();
    }

    public Book save(Book book){
        return bookRepository.save(book);
    }

    public Book update(Book book){
        return bookRepository.save(book);
    }

    public Book findById(long id){
        return bookRepository.findById(id).orElse(new Book());
    }

    public void deleteById(long id){
        bookRepository.deleteById(id);
    }
}