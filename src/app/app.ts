import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './core/components/header/header';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Menu } from './core/components/menu/menu';
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, Header, FontAwesomeModule, Menu, NgClass],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {

    public isMobileMenuOpen = false;

    constructor(
        private router: Router
    ) {
    }

    toggleMobileMenu(): void {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }

    showHeader() {
        let isLogin: boolean = this.router.url.includes('login');

        return !isLogin;
    }
}
