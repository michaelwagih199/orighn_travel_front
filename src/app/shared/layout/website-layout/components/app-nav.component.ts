import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'responsive-nav',
  standalone: true,
  templateUrl:'nav.html',
  styleUrls: ['../../_layout.scss'],
  imports: [CommonModule, RouterModule],
})
export class NaveNew {
  showMenu = false;
  maxWidth = 0;

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

}
