import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from "./menu.model";
import { MENU } from "./menu";

@Component({
  selector: 'app-sidebarmain',
  templateUrl: './sidebarmain.component.html',
  styleUrls: ['./sidebarmain.component.scss']
})
export class SidebarmainComponent implements OnInit {

  menu: any;
  menuItems: any = [];

  constructor(
    private router: Router,
  ) {
  }

  async ngOnInit() {
    await this.initialize();
  }

  ddToggle(i: any, slug: any) {
    //this.arrayMenu[i].isTitle = !this.arrayMenu[i].isTitle;
  }

  async initialize() {
    this.menuItems = MENU;
    console.log('menuItems ', this.menuItems, MENU);
  }

  logout() {
    // this.authService.logOut().then(() => {
    this.router.navigate(['/']);
    sessionStorage.clear();
    // });
  }

  ngAfterViewInit() {
    //this.menu = new MetisMenu(this.sideMenu.nativeElement);

    //this._activateMenuDropdown();
  }

  _removeAllClass(className: any) {
    const els = document.getElementsByClassName(className);
    while (els[0]) {
      els[0].classList.remove(className);
    }
  }

  hasItems(item: any) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }
}
