import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle: string = "Movies API Consumer";
  headerLogoPath: string = "../assets/img/movieLogo.gif";
  headerLogoAlt: string = "Header Logo";

  constructor() { }

  ngOnInit() {
  }

}
