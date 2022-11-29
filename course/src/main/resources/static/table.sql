-- Table: public.course

-- DROP TABLE IF EXISTS public.course;

CREATE TABLE IF NOT EXISTS public.course
(
    course_id integer NOT NULL DEFAULT nextval('course_course_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default",
    hours integer,
    tutor character varying COLLATE pg_catalog."default",
    start_date date,
    end_date date,
    receiver character varying COLLATE pg_catalog."default",
    CONSTRAINT course_pkey PRIMARY KEY (course_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.course
    OWNER to postgres;