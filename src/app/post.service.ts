import { Injectable } from '@angular/core';
import { Post } from '../app/models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  arrPost: Post[];
  post: Post;

  constructor() {
    this.arrPost = [
      // tslint:disable-next-line: max-line-length
      new Post('New York', 'Nueva York (en inglés: New York City) es la ciudad más poblada de los Estados Unidos de América y una de las más pobladas del mundo.Desde finales del siglo XIX es uno de los centros de la economía mundial.Nueva York está considerada como una ciudad global, por sus influencias a nivel mundial en los medios de comunicación, en la política, en la educación, en la arquitectura, en el entretenimiento, las artes y la moda. La influencia artística y cultural de la ciudad es de las más fuertes del mundo.En esta ciudad se encuentra la sede central de la Organización de las Naciones Unidas.La gran relevancia de la ciudad a muchos niveles la convierte, junto a Moscú, Pekín, Londres, Tokio y París en una de las ciudades con mayores estadísticas del planeta.La ciudad se compone de cinco boroughs: Bronx, Brooklyn, Manhattan, Queens y Staten Island(también conocidos como "distritos metropolitanos" para los efectos de la ciudad, y cuya traducción y figura administrativa es equivalente a "municipio") cada uno de los cuales coincide con un condado: Bronx, Kings, Nueva York, Queens, y Richmond.Con más de 24 millones de neoyorquinos en un área urbana de 830 kilómetros cuadrados(320 mi²), Nueva York es la segunda ciudad con más densidad de población de los Estados Unidos, solo detrás de Union City, Nueva Jersey, localizada al otro lado del río Hudson', 'Alberto F', 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/25/13/74.jpg', '15/03/2019', 'Viajes'),

      // tslint:disable-next-line: max-line-length
      new Post('BlockChain', '¿Qué es el blockchain? Entre otras cosas, es una de las palabras de moda en los últimos tiempos. La cadena de bloques es también un concepto que plantea una enorme revolución no solo en nuestra economía, sino en todo tipo de ámbitos. Entender lo que es esa cadena de bloques no es tan difícil, y dado que cada vez se utiliza más este concepto hemos querido hacer una especie de curso rápido de introducción al blockchain, para explicar qué es, cómo funciona y cuál es esa revolución que plantea la cadena de bloques.', 'Mario', 'https://i.blogs.es/b5ce90/blockchain2/450_1000.jpg', '8/01/2018', 'Tecnología'),

      // tslint:disable-next-line: max-line-length
      new Post('China', '¿Cuál es el mejor seguro de viaje para China? es una de las consultas que más recibimos, sobre todo cuando empezáis a organizar vuestro viaje y os encontráis con un destino que a simple vista no es fácil y que presenta más complicaciones que otros destinos asiáticos, en gran parte debido a sus diferencias culturales y a la barrera idiomática. Aunque pueda parecer lo contrario, China es un país bastante saludable para viajar, en el que además se pueden encontrar buenos centros médicos, sobre todo en las grandes ciudades como Beijing y Shanghái.Pese a esto, es importante saber que en las zonas más rurales la atención médica suele ser menos adecuada, por lo que es importante contar con un buen seguro de viaje, además de considerar que los precios de la sanidad no son especialmente económicos pudiendo llegar a costar una evacuación de emergencia más de 100000 dólares.', 'Sandra', 'https://www.65ymas.com/uploads/s1/20/74/73/china.jpeg', '18/07/2019', 'Viajes'),

      // tslint:disable-next-line: max-line-length
      new Post('Gatetes', 'A estas alturas no se puede negar que los gatos son los auténticos reyes de Internet. Vayas a la red social que vayas, te encontrarás con miles de millones de videos e imágenes de gatos haciendo monerías. No nos extraña, porque en esta batalla no escrita sobre quién es la mejor mascota, el gato se lleva la palma. Por eso, para celebrar el Día Internacional del Gato, hemos querido recopilar todas esas tonterías que hacen nuestros mininos y que demuestra que son, sin lugar a duda, las mascotas más divertidas del mundo.', 'Gaby', 'https://www.infobae.com/new-resizer/zrfvo5w-Lw_AmxuhDiJ7IIUH7KE=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/3KJ4AFYLUZAG7DYO7IJULMZ3P4.jpg', '30/12/2009', 'Animales'),
    ];

  }

  agregarPost(pDatos) {
    this.arrPost.unshift(pDatos);
    console.log(this.arrPost);
    localStorage.setItem('post', JSON.stringify(this.arrPost));
  }

  getAllPost() {
    if (localStorage.getItem('post')) {
      this.arrPost = JSON.parse(localStorage.getItem('post'));
    } else {
      this.arrPost = this.arrPost;
    }
    return this.arrPost;
  }

  getPostsByCategoria(cat) {
    return this.arrPost.filter(post => post.categoria === cat);
  }

  eliminarPost(post) {
    for (let i = 0; i < this.arrPost.length; i++) {
      if (this.arrPost[i].titulo === post.titulo) {
        this.arrPost.splice(i, 1);
        localStorage.removeItem('post');
        this.arrPost = this.arrPost;

        console.log(this.arrPost)
      }
    }
  }

  getByIdPromise(ptitulo: string): Promise<Post> {
    const prom = new Promise<Post>((resolve, reject) => {
      resolve(this.arrPost.find(item => item.titulo === ptitulo));
    });
    return prom;
  }
}
