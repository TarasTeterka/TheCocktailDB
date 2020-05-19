import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './pages/search/search.component';
import { CocktailsComponent } from './pages/coctails/cocktails.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CocktailItemComponent } from './pages/cocktail-item/cocktail-item.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { AboutAlcoDrinkComponent } from './pages/about/about-alco-drink/about-alco-drink.component';
import { AboutNonAlcoDrinkComponent } from './pages/about/about-non-alco-drink/about-non-alco-drink.component';
import { CocktailInfoComponent } from './pages/cocktail-info/cocktail-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent,
children: [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home/alcoholic-cocktails', component: MainComponent},
  {path: 'home/non-alcoholic-cocktails', component: MainComponent},
  {path: 'home/select-ingredients', component: MainComponent}
] },
  { path: 'search', component: SearchComponent },
  { path: 'cocktails', component: CocktailsComponent },
  { path: 'cocktail-item', component: CocktailItemComponent },
  { path: 'home/about-us', component: AboutUsComponent },
  { path: 'home/about-alco-drink', component: AboutAlcoDrinkComponent },
  { path: 'home/about-non-alco-drink', component: AboutNonAlcoDrinkComponent },
  { path: 'cocktail-info', component: CocktailInfoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
