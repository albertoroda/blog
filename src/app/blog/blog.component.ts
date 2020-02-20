import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];

  constructor(private postService: PostService) {
    this.arrPost = this.postService.getAllPost();
  }

  ngOnInit(): void {
  }

  manejarChange($event) {
    if ($event.target.value === "") {
      this.arrPost = this.postService.getAllPost();
    } else {
      this.arrPost = this.postService.getPostsByCategoria($event.target.value);
    }
  }

}
