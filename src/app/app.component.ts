import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { CarouselComponent } from './units/carousel/carousel.component';
import { CardsComponent } from './units/cards/cards.component';
import { ContactComponent } from './pages/contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HomeComponent,AboutComponent,IndustriesComponent,CarouselComponent,CardsComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nestweb';
}
