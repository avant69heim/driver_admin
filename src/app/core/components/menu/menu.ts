import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

export interface MenuItem {
    path: string;
    icon: string;
    name: string;
}

@Component({
    selector: 'app-menu',
    imports: [
        RouterLinkActive,
        RouterLink
    ],
    templateUrl: './menu.html',
    styleUrl: './menu.scss'
})
export class Menu {

    public menuItems: MenuItem[] = [
        { path: '/dashboard', icon: 'fas fa-tachometer-alt', name: 'Dashboard' },
        { path: '/users', icon: 'fas fa-users', name: 'Users' },
        // { path: '/products', icon: 'fas fa-box-open', name: 'Products' },
        // { path: '/reports', icon: 'fas fa-chart-line', name: 'Reports' },
        { path: '/settings', icon: 'fas fa-cog', name: 'Settings' }
    ];

}
