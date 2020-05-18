import { Component, OnInit, Input } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';
import { Cocktails } from 'src/app/core/interfaces/drink.interface';

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss']
})

export class CocktailItemComponent implements OnInit {
  drinkLists: Array<Cocktails> = [];
  constructor(private drinksService: DrinksService) { }

  @Input() listCocktail: any;

  ngOnInit(): void {
  }

}
