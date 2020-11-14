import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../models/Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input('movie')
  movie: Movie;
  @Output() valueChange = new EventEmitter()
  @Output()
  clickButtonEmitter = new EventEmitter();

  imagePath: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.movie.poster_path +'chiild');
    this.imagePath = 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path;
  }
  clickButton() {
    console.log('button with id -' + this.movie.id);
    this.clickButtonEmitter.emit(this.movie.id)
  }

}
