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
    name: '',
    hours: 0,
    tutor: '',
    startDate: new Date,
    endDate: new Date,
    receiver: ''
  };

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (params.get('id')) {
        this.findById(parseInt(params.get('id')!));
      }
    });
    this.findAll();
  }

  save(): void {
    this.courseService.save(this.initialValues).subscribe(() => {
      this.initialValues = {
        id: 0,
        name: '',
        hours: 0,
        tutor: '',
        startDate: new Date,
        endDate: new Date,
        receiver: ''
      };
      this.router.navigate(['/']);
      this.findAll();
    });
  }

  allCourses: Course[] = [];

  findAll(): void {
    this.courseService.findAll().subscribe((response) => {
      this.allCourses = response;
    });
  }

  findById(id: number): void {
    this.courseService.findById(id).subscribe((response) => {
      this.initialValues = response;
    });
  }

  deleteByIdClick(id: number): void {
    this.courseService.deleteById(id).subscribe(() => {
      this.router.navigate(['/']);
      this.findAll();
    });
  }

}
