INSERT INTO book(isbn,tittle,autor,editorial,category) 
VALUES ('aaaisbn'||generate_series(1,6),
'aaatittle'||generate_series(1,6),
'aaaautor'||generate_series(1,6),
'aaaeditorial'||generate_series(1,6),
'aaacategory'||generate_series(1,6)
);


libro_id     | integer           |              | not null | nextval('book_libro_id_seq'::regclass)
 isbn         | character varying |              |          |
 tittle       | character varying |              |          |
 autor        | character varying |              |          |
 editorial    | character varying |              |          |
 category     | character varying |              |          |
 created_date | date   

 create table book (
    libro_id serial not null,
    isbn varchar,
    tittle varchar,
    autor varchar,
    editorial varchar,
    category varchar,
    created_date date
 )     


 insert into categoria (code, name) values('code'||generate_series(1,5),
'category'||generate_series(1,5))