import { Component } from '@angular/core';
import { PathsEnum } from '../../../shared/enums/paths.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {

    public paths = PathsEnum;
    public isProfileMenuOpen: boolean = false;

    constructor(
        private router: Router
    ) {
    }

    toggleProfileMenu(): void {
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    clickRedirect(value: string): void {
        this.router.navigate([value]);
    }

}
