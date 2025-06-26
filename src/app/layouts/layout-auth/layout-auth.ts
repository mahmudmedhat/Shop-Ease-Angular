import { Component } from '@angular/core';
import { NavBarAuth } from "../../components/nav-bar-auth/nav-bar-auth";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-layout-auth',
  imports: [NavBarAuth, RouterOutlet, Footer],
  templateUrl: './layout-auth.html',
  styleUrl: './layout-auth.scss'
})
export class LayoutAuth {

}
