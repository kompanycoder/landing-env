import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  logo = 'Pandora Genesis';
  constructor() { }

  ngOnInit() {
  }
  // function to load in logo

}
