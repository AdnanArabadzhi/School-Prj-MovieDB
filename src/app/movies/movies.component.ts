import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Array<Movie>;
  intheaterMovies: Array<Movie>;
  popularKidsMovies: Array<Movie>;
  bestDramaMovies: Array<Movie>;
  singleMovie:Movie;
  message = null;
  constructor(private moviesService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    const [
      popular,
      theaters,
      kids,
      drama
    ] = this.route.snapshot.data['movies'];
    this.popularMovies = popular;
    this.intheaterMovies = theaters;
    this.popularKidsMovies = kids;
    this.bestDramaMovies = drama;

  // this.moviesService.getPopularMovies().subscribe(data => {
  //   this.popularMovies = data;
  //   this.singleMovie = this.popularMovies[0];
  // });
  // this.moviesService.getInTheaterMovies().subscribe(data => {
  //   this.intheaterMovies = data;
  // });
  // this.moviesService.getBestKidsMovies().subscribe(data => {
  //   this.popularKidsMovies = data;
  // });
  // this.moviesService.getDramaMovies().subscribe(data => {
  //   this.bestDramaMovies = data;
  // });


  }

  fromChild(event) {
    console.log(event);
    this.message = event;
  }

}
