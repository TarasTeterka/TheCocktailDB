import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoctailsComponent } from './pages/coctails/coctails.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CoctailItemComponent } from './pages/coctail-item/coctail-item.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { AboutAlcoDrinkComponent } from './pages/about/about-alco-drink/about-alco-drink.component';
import { AboutNonAlcoDrinkComponent } from './pages/about/about-non-alco-drink/about-non-alco-drink.component';
import { CoctailInfoComponent } from './pages/cocktail-info/coctail-info.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CoctailsComponent,
    PageNotFoundComponent,
    CoctailItemComponent,
    SearchComponent,
    AboutUsComponent,
    AboutAlcoDrinkComponent,
    AboutNonAlcoDrinkComponent,
    CoctailInfoComponent
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
