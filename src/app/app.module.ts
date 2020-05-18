import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CocktailItemComponent } from './pages/cocktail-item/cocktail-item.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { AboutAlcoDrinkComponent } from './pages/about/about-alco-drink/about-alco-drink.component';
import { AboutNonAlcoDrinkComponent } from './pages/about/about-non-alco-drink/about-non-alco-drink.component';
import { CocktailInfoComponent } from './pages/cocktail-info/cocktail-info.component';
import { CocktailsComponent } from './pages/coctails/cocktails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CocktailsComponent,
    PageNotFoundComponent,
    CocktailItemComponent,
    SearchComponent,
    AboutUsComponent,
    AboutAlcoDrinkComponent,
    AboutNonAlcoDrinkComponent,
    CocktailInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
