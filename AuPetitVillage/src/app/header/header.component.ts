import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  
  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
    const linksContainer = document.querySelector('.header__links-container-mobile');
    if (linksContainer) {
      linksContainer.classList.toggle('is-hidden', !this.menuOpen);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
      if(window.innerWidth > 840) {
        this.menuOpen = false;
      }
  }
}
