import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './pages/search/search.component';
import { CoctailsComponent } from './pages/coctails/coctails.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CoctailItemComponent } from './pages/coctail-item/coctail-item.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { AboutAlcoDrinkComponent } from './pages/about/about-alco-drink/about-alco-drink.component';
import { AboutNonAlcoDrinkComponent } from './pages/about/about-non-alco-drink/about-non-alco-drink.component';
import { CoctailInfoComponent } from './pages/cocktail-info/coctail-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'search', component: SearchComponent },
  { path: 'coctails', component: CoctailsComponent },
  { path: 'coctail-item', component: CoctailItemComponent },
  { path: 'home/about-us', component: AboutUsComponent },
  { path: 'home/about-alco-drink', component: AboutAlcoDrinkComponent },
  { path: 'home/about-non-alco-drink', component: AboutNonAlcoDrinkComponent },
  { path: 'coctail-info', component: CoctailInfoComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
