import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/posts';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async params => {
      this.post = await this.postService.getByIdPromise(params.postTitulo);
      // Devuelve los parametros variables de la url
    });
  }

  eliminar(post) {
    console.log(post)
    this.postService.eliminarPost(post);
  }

}
