import { Component, OnInit } from '@angular/core';
import { DrinksService } from 'src/app/core/services/drinks.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public alcohol = false;
  ingredient = false;
  glass = false;
  public show = false;
  listglass: any = [];
  list: any = [];
  value: any;
  randomList: any = [];
  listForm: any = [];
  constructor(
    private drinksService: DrinksService
  ) { }

  ngOnInit(): void {
    this.randomDrinks();
  }

  randomDrinks() {
    for (let i = 0; i < 5; i++) {
      this.drinksService.getRandom().subscribe(
        (data) => {
          this.list = data.drinks[0];
          this.randomList.push(this.list);
        },
        (error) => {}
      );
    }
  }
}
