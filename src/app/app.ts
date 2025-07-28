import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, FontAwesomeModule],
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
