INSERT INTO book(isbn,tittle,autor,editorial,category) 
VALUES ('cccisbn'||generate_series(1,2),
'ccctittle'||generate_series(1,2),
'cccautor'||generate_series(1,2),
'ccceditorial'||generate_series(1,2),
'ccccategory'||generate_series(1,2)
);


libro_id     | integer           |              | not null | nextval('book_libro_id_seq'::regclass)
 isbn         | character varying |              |          |
 tittle       | character varying |              |          |
 autor        | character varying |              |          |
 editorial    | character varying |              |          |
 category     | character varying |              |          |
 created_date | date            


 insert into categoria (code, name) values('code'||generate_series(1,5),
'category'||generate_series(1,5))