import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input('movie')
  movie: Movie;
  imagePath: string;

  @Output()
  clickButtonEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.movie + "ok from child");
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }
  clickButton() {
    console.log("button with id " + this.movie.id + " was clicked");
    this.clickButtonEmitter.emit(this.movie.id);
  }

}
