import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { SingleMovieResolver } from "./services/resolvers/single-movie.resolver";
import { MovieListResolver } from "./services/resolvers/movie-list.resolver";
import { MovieSearchComponent } from "./movie-search/movie-search.component";

const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'movies'},
  { path: 'movies/search', component: MovieSearchComponent },
  { path: 'movies', component: MoviesComponent, resolve: { movies: MovieListResolver }},
  { path: 'movies/:id', component: MovieDetailsComponent, resolve: { singleMovie: SingleMovieResolver} },
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],

})

export class AppRoutingModule { }

