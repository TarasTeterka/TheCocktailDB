import { Component, OnInit, Input } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';

@Component({
  selector: 'app-coctail-item',
  templateUrl: './coctail-item.component.html',
  styleUrls: ['./coctail-item.component.scss']
})
export class CoctailItemComponent implements OnInit {

  constructor(private drinksService: DrinksService) { }

  @Input() listCoctail: any;

  ngOnInit(): void {
  }

}
