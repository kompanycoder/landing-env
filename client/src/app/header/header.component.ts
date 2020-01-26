import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  logo = '';
  constructor() { }

  ngOnInit() {
    this.loadLogo();
  }
  // function to load in logo
  loadLogo() {
    const words = 'Pandora Genesis';
    const capitalizedLogo = words.toLocaleUpperCase();
    this.logo = capitalizedLogo;
    // console.log(capitalizedLogo, this.logo);
    return this.logo;
  }
}
