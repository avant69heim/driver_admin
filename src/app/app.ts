import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Menu } from './core/components/menu/menu';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, FontAwesomeModule, Menu],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    constructor(
        private router: Router
    ) {
    }

    showHeader() {
        let isLogin: boolean = this.router.url.includes('login');

        return !isLogin;
    }
}
