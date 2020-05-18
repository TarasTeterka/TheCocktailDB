import { Component, OnInit, Input, Output } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';
import { Cocktail } from 'src/app/core/interfaces/drink.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coctail-info',
  templateUrl: './coctail-info.component.html',
  styleUrls: ['./coctail-info.component.scss']
})
export class CoctailInfoComponent implements OnInit {
  idDrink: number;
  // coctail: Cocktail;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  @Output() list: any;
  @Input() coctail: Cocktail;
  constructor(private drinksService: DrinksService,
              private route: ActivatedRoute) { }
  @Input() listCoctail: any;

  ngOnInit(): void {
    // console.log(this.route.fragment['value']);
    // tslint:disable-next-line:no-string-literal
    this.getInfo(this.route.fragment['value']);
  }
  getInfo(id): void {
    // console.log(`w`);
    this.drinksService.getCoctail(id).subscribe(
      (data) => {
        this.list = data.drinks[0];
        console.log(this.list);
        // console.log(this.list.strIngredient1);
      },
      (error) => {}
    );
  }
}
