//import { Injectable } from '@angular/core';
////import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
//import { Observable  } from 'rxjs';
//
//import { Blog } from './blog.class';
//
//@Injectable({
//  providedIn: 'root'
//})
//
//export class BlogService {
//  constructor() { }//private http: HttpClient
//
//  getBlogs(): Blog[] { //Observable<Blog[]>
//    /*return this.http
//      .get('/blogs.json')
//      .pipe(
//        map((blogs: Blog[]) => blogs.map(blog => {
//        return new Blog(
//          blog.id,
//          blog.title,
//          blog.content,
//        )
//    })));*/
//    return [new Blog(
//        5435,
//        'blog 1',
//        'blog 1 content',
//      ),new Blog(
//        5436,
//        'blog 2',
//        'blog 2 content',
//      ),new Blog(
//        5437,
//        'blog 3',
//        'blog 3 content',
//      ), {
//        5438,
//        'blog 4',
//        'blog 4 content',
//      }];
//  }
//}