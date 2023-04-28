import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarmain',
  templateUrl: './navbarmain.component.html',
  styleUrls: ['./navbarmain.component.scss']
})
export class NavbarmainComponent implements OnInit {

  descripcion: string = '';
  abrir: boolean = false;

  appName: string = 'Dashboard';
  versionApp: string = '';

  constructor() { }

  ngOnInit() {
    this.descripcion = sessionStorage["descripcion"];
  }

  openSidebar() {
    this.abrir = true;
    document.getElementById("main")!.style.marginLeft = "0px";
    document.getElementById("mySidebar")!.style.width = "180px";
    document.getElementById("mySidebar")!.style.display = "block";
    document.getElementById("openNav")!.style.display = 'none';
    //document.getElementById("box")!.style.marginLeft = "30px";
    //document.getElementById("box")!.style.width = "97%";
  }

  closeSidebar() {
    this.abrir = false;
    document.getElementById("main")!.style.marginLeft = "0px";
    document.getElementById("mySidebar")!.style.display = "none";
    document.getElementById("openNav")!.style.display = "inline-block";
    //document.getElementById("box")!.style.marginLeft = "10px";
    //document.getElementById("box")!.style.width = "100%";
  }

  openNav() {
    if (this.abrir == false) {
      this.abrir = true;
    } else {
      if (this.abrir == true) {
        this.abrir = false;
      }
    }
  }
}
