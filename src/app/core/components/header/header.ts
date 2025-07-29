import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { PathsEnum } from '../../../shared/enums/paths.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss'
})
export class Header {

    @Output() menuToggle = new EventEmitter<void>();
    public paths = PathsEnum;
    public isProfileMenuOpen: boolean = false;

    constructor(
        private router: Router,
        private elementRef: ElementRef
    ) {
    }

    onMenuToggleClick(): void {
        this.menuToggle.emit();
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: Event): void {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isProfileMenuOpen = false;
        }
    }

    toggleProfileMenu(): void {
        this.isProfileMenuOpen = !this.isProfileMenuOpen;
    }

    clickRedirect(value: string): void {
        this.router.navigate([value]);
    }

}
