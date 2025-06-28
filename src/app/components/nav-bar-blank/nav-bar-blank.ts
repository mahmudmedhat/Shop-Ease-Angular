import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Auth } from '../../core/services/auth';

@Component({
  selector: 'app-nav-bar-blank',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar-blank.html',
  styleUrl: './nav-bar-blank.scss'
})
export class NavBarBlank {

  readonly _Auth=inject(Auth);

}
