import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private drinksService: DrinksService) { }
  list: any = [];
  search: string;
  cocktailList: any = [];
  errors = false;
  ngOnInit(): void {
  }
  searchCocktail() {
    if (this.search === undefined) {
      this.search = null;
    }
    if (this.search !== ` ` && this.search !== ``) {
      this.drinksService.getSearch(this.search).subscribe(
        (data) => {
          this.list = data.drinks;
          this.errors = false;

          if (this.list === null) {
            this.list = [];
            this.errors = true;
          }
        },
        (error) => { }
      );
    } else {
      this.list = [];
      this.errors = true;
    }
  }
}
