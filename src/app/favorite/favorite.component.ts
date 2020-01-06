import { Component, OnInit } from '@angular/core';

import {FaIconLibrary} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean;
  constructor() {
  }

  onClickFavorite($event) {
    this.isFavorite = !this.isFavorite;
    console.log('isFavorite set to ' + this.isFavorite);
  }

  ngOnInit() {
  }

}
