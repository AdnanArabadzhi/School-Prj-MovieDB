import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Movie from '../../models/Movie';
import MovieDetails from '../../models/Movie-Details';
import { MovieService } from '../movie.service';
import { merge, forkJoin } from 'rxjs';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IN_THEATERS = 'https://api.themoviedb.org/3/discover/movie';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&primary_release_year=2020'

const API_KEY = 'api_key=275b367630dd1394c9deb9ae2f3b8886';

@Injectable()
 export class MovieListResolver implements Resolve<Movie[]>{

    constructor(
        private movieService: MovieService

    ) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return merge(
            this.movieService.getInTheaterMovies(),
            this.movieService.getBestKidsMovies(),
            this.movieService.getPopularMovies(),
            this.movieService.getDramaMovies()

        )
    }
}