import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import Movie from '../models/Movie';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import MovieDetails from '../models/Movie-Details';


const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS = 'https://api.themoviedb.org/3/discover/movie';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&primary_release_year=2020'

const API_KEY = 'api_key=275b367630dd1394c9deb9ae2f3b8886';
    @Injectable({
      providedIn: 'root'
    })

export class MovieService {

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + 'movie/popular' + '?' + API_KEY)
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }
  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(IN_THEATERS + '?' + API_KEY + '&with_release_type=2|3')
    .pipe(
      map((data) => data['results'].slice(0, 6))
    );
  }
  getBestKidsMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + KIDS + '&' + API_KEY)
    .pipe(
      map((data) => data['results'].slice(6, 12))
    );
  }
  getDramaMovies(): Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>(BASE_URL + BEST_DRAMA + '&' + API_KEY)
    .pipe(
      map((data) => data['results'].slice(12, 18))
    );
  }
  getMovieById(id: string) {
    return this.http.get<MovieDetails>(BASE_URL + `movie/${id}` + '?' + API_KEY)
    
  }

  searchMovie(query: string) {
    return this.http.get<Movie[]>(BASE_URL + 'search/movie' + '?' + API_KEY + `&query=${query}`)
  }
}
