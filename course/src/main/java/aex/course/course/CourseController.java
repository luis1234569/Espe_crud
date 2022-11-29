package aex.course.course;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/course")
@CrossOrigin("*")
@AllArgsConstructor
public class CourseController {
    
    private final CourseRepository courseRepository;

    @PostMapping("/save")
    public Course save(@RequestBody Course course){
        return courseRepository.save(course);
    }

    @GetMapping("/list")
    public List <Course> findAll(){
        return courseRepository.findAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable long id){
        courseRepository.deleteById(id);
    }

    @GetMapping("/{id}")
    public Course findById(@PathVariable long id){
        return courseRepository.findById(id).orElse(new Course());
    }
}
