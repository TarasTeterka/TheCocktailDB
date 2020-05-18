import { Component, OnInit, Input } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';
import { Cocktails } from 'src/app/core/interfaces/drink.interface';

@Component({
  selector: 'app-coctail-item',
  templateUrl: './coctail-item.component.html',
  styleUrls: ['./coctail-item.component.scss']
})

export class CoctailItemComponent implements OnInit {
  drinkLists: Array<Cocktails> = [];
  constructor(private drinksService: DrinksService) { }

  @Input() listCoctail: any;

  ngOnInit(): void {
  }

}
