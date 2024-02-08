import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  ngOnInit(): void{
  }
  
  openMenu(): void{
    const burgerMenu = document.querySelector(".header__links-container");
    if(burgerMenu instanceof HTMLElement) {
      if (burgerMenu.style.display === "block") {
        burgerMenu.style.display = "none";
      } else {
        burgerMenu.style.display = "block";
      } 
    }
  }
}
