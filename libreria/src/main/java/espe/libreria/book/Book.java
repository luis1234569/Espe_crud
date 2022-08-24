package espe.libreria.book;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("book")
public class Book {
    @Id
    private long libroId;
    private String isbn;
    private String tittle;
    private String autor;
    private String editorial;
    private String category;
    private Date created_date;

}
