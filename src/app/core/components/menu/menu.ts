import {Component, Input} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PathsEnum } from '../../../shared/enums/paths.enum';

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

    @Input() isMobileMenuOpen: boolean = false;
    public path = PathsEnum;

    public menuItems: MenuItem[] = [
        { path: this.path.dashboard, icon: 'fas fa-tachometer-alt', name: 'Dashboard' },
        { path: this.path.users, icon: 'fas fa-users', name: 'Users' },
        { path: this.path.register, icon: 'fas fa-user-plus', name: 'Add User' },
        // { path: '/reports', icon: 'fas fa-chart-line', name: 'Reports' },
        // { path: '/settings', icon: 'fas fa-cog', name: 'Settings' }
    ];

}
