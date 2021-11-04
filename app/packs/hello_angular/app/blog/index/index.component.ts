import { Component, OnInit } from '@angular/core';

//import { BlogService }  from '../blog.service';
import { Blog }  from '../blog.class';

@Component({
  selector: 'blogs',
  template: require('./index.component.html'),
})

export class BlogIndexComponent implements OnInit {
  blogs: Blog[];

  constructor(
    //private blogService: BlogService,
  ) {
    /*this.blogService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    });*/    
  }

  ngOnInit() { 
    //this.blogs = this.blogService.getBlogs();
   }
}