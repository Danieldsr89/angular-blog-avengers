import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomeComponent } from "./pages/home/home.component";
import { BigCardComponent } from './components/big-card/big-card.component';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MenuTitleComponent, HomeComponent, BigCardComponent, MenuBarComponent]
})
export class AppComponent {
  title = 'angular-Blog';
}
