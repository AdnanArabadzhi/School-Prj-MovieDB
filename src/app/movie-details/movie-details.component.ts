import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import MovieDetails from '../models/Movie-Details';
import { MovieService } from '../services/movie.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id: string;
  movie: MovieDetails;
  movieGenres: string;

  constructor(
    private moviesService:  MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movie = this.route.snapshot.data['singleMovie'];
    this.movieGenres = this.movie.genres
    .map( el => el['name'])
    .join(' ');
  }

}
