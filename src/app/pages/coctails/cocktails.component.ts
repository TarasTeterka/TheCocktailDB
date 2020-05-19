import { Component, OnInit, Input } from '@angular/core';
import { Cocktail, Cocktails } from 'src/app/core/interfaces';
import { DrinksService } from 'src/app/core/services/drinks.service';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  drinkList: Array<Cocktails> = [];
  cocktail: Cocktail;
  idDrink: number;
  drinkService: any;
  randomList: any = [];
  @Input() listCoctail: any;
  constructor(
    private drinksService: DrinksService
  ) { }

  ngOnInit(): void {
    this.getCoctails();
  }

  private getCoctails(): void {
    for (let i = 0; i < 1; i++) {
      this.drinksService.getCoctails()
        .subscribe(
          (data) => {
            this.drinkList = data.drinks[0];
            this.randomList.push(this.drinkList);
          },
          (error) => console.error(error)
        );
    }
  }
}
