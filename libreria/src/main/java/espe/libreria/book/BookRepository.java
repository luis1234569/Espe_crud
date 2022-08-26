package espe.libreria.book;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<Book, Long> {
    List<Book> findAll();
    List<Book> findByAutorLikeIgnoreCase(String term);
    List<Book> findByTittleLikeIgnoreCase(String term);
    List<Book> findByEditorialLikeIgnoreCase(String term);
    List<Book> findByCreatedDateLikeIgnoreCase(String term);
    List<Book> findByCategoryLikeIgnoreCase(String term);
}
