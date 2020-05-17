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
  coctailList: any = [];
  errors = false;
  ngOnInit(): void {
  }
  searchCoctail() {
    console.log(this.search);
    if (this.search === undefined) {
      this.search = null;
    }
    if (this.search !== ` ` && this.search !== ``) {
      this.drinksService.getSearch(this.search).subscribe(
        (data) => {
          this.list = data.drinks;
          console.log(this.list);
          this.errors = false;

          if (this.list === null) {
            this.list = [];
            this.errors = true;
          }
          // this.coctailList.push(this.list);
          // console.log(this.coctailList);
        },
        (error) => {}
      );
    } else {
      this.list = [];
      this.errors = true;
      // console.log(this.list);
    }
  }
}
