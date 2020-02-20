import { Injectable } from '@angular/core';
import { Post } from '../app/models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPost: Post[];

  constructor() {
    this.arrPost = [
      new Post('New York', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate!', 'Alberto F', 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/25/13/74.jpg', '15/03/2019', 'Viajes'),

      new Post('BlockChain', 'Lorem, ipsum dolor sit amet consectetur adipisicinsdf sdffsj sdf sfdfnj sdf sdffsg elit. Unde, voluptate!', 'Mario', 'https://i.blogs.es/b5ce90/blockchain2/450_1000.jpg', '8/01/2018', 'Tecnología'),

      new Post('China', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptate!', 'Sandra', 'https://www.65ymas.com/uploads/s1/20/74/73/china.jpeg', '18/07/2019', 'Viajes'),

      new Post('Gatetes', 'Lorem, ipsum dolorjjj wedjejd wedjwd wedjnedjnewjd wdnd dwnwed wed ed wedwed wedwed wed wedwef wef wf wef wwew wef sit amet consectetur adipisicing elit. Unde, voluptate!', 'Gaby', 'https://www.infobae.com/new-resizer/zrfvo5w-Lw_AmxuhDiJ7IIUH7KE=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/3KJ4AFYLUZAG7DYO7IJULMZ3P4.jpg', '30/12/2009', 'Animales'),
    ];

  }


  agregarPost(pDatos) {
    this.arrPost.push(pDatos);
    console.log(this.arrPost);
  }

  getAllPost() {
    return this.arrPost;
  }

  getPostsByCategoria(cat) {
    return this.arrPost.filter(post => post.categoria === cat);
  }
}
