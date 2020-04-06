import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {SearchType, MovieService} from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;


  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged(){
    this.results = this.movieService.searchData(this.searchTerm, this.type);


    // this.results.subscribe(res => {
      // This is one way to wait for the data to get back and use it
      // You can also make anular wait for the data in the view by using the async pipe
      // ngfor let item of (results | async) will let angular know that the data is an observable
      // And it has to wait to populate the view
    // })

  }

}
