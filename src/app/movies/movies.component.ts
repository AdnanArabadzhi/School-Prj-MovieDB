import { Component, OnInit } from '@angular/core';
import Movie from '../models/Movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;
  singleMovie: Movie;
  message = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results'].slice(0, 6);
      console.log('popular movies:' + this.popularMovies);
      this.singleMovie = this.popularMovies[0];
    });
    this.movieService.getIntheaterMovies().subscribe(data => {
      this.inTheaterMovies = data['results'].slice(7, 13);
    })
  }

  fromChild(event) {
    console.log(event);
    this.message = event;
  }

}
