package aex.course.course;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("course")

public class Course {
    @Id
    @Column("course_id")
    private long id;
    private String name;
    private Integer hours;
    private String tutor;
    private Date startDate;
    private Date endDate;
    private String receiver;
}
