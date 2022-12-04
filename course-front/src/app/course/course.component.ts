import { Course } from './../interface/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  initialValues: Course = {
    id: 0,
    name: 'ingles',
    email: 'vvdf'
  };

  ngOnInit(): void {
    this.findAll();
    console.log(this.initialValues)
  }

  save(): void {
    if (this.initialValues.id==0) {
      this.courseService.save(this.initialValues).subscribe((res) => {
        this.initialValues = {
          id: 0,
          name: '',
          email: '',
        };
        this.router.navigate(['/']);
        this.findAll();
        console.log(res)
      });
    } else {
      this.courseService.update(this.initialValues).subscribe(() => {
        this.initialValues = {
          id: 0,
          name: '',
          email: '',
        };
        this.router.navigate(['/']);
        this.findAll();
      });
    }

  }

  allCourses: Course[] = [];

  findAll(): void {
    this.courseService.findAll().subscribe((response) => {
      this.allCourses = response;
    });
  }

  // findById(id: number): void {
  //   this.courseService.findById(id).subscribe((response) => {
  //     this.initialValues = response;
  //   });
  // }

  deleteByIdClick(id: number): void {
    this.courseService.deleteById(id).subscribe(() => {
      this.router.navigate(['/']);
      this.findAll();
    });
  }

  selectCourse(id: number){
    this.courseService.findById(id).subscribe((res) => {
      this.initialValues=res
      console.log(this.initialValues)
      console.log(res.email)
    });
  }

  set(){
    this.initialValues.email='homes'
  }
}
