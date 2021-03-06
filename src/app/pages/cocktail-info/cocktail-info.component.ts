import { Component, OnInit, Input, Output } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';
import { Cocktail } from 'src/app/core/interfaces/drink.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-info',
  templateUrl: './cocktail-info.component.html',
  styleUrls: ['./cocktail-info.component.scss']
})
export class CocktailInfoComponent implements OnInit {
  idDrink: number;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  @Output() list: any;
  @Input() coctail: Cocktail;
  constructor(private drinksService: DrinksService,
              private route: ActivatedRoute) { }
  @Input() listCoctail: any;

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.getInfo(this.route.fragment['value']);
  }
  getInfo(id): void {
    this.drinksService.getCoctail(id).subscribe(
      (data) => {
        this.list = data.drinks[0];
        console.log(this.list);
      },
      (error) => {}
    );
  }
}
