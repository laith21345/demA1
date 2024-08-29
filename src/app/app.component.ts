import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { FooterComponent } from "./footer/footer.component";
import { StarComponent } from "./star/star.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    AboutComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    NotFoundComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
