import { Component } from '@angular/core';
import { NavBarBlank } from "../../components/nav-bar-blank/nav-bar-blank";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-layout-blanks',
  imports: [NavBarBlank, RouterOutlet, Footer],
  templateUrl: './layout-blanks.html',
  styleUrl: './layout-blanks.scss'
})
export class LayoutBlanks {

}
