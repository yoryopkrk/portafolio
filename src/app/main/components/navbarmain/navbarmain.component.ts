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
  versionApp: string = 'v1';

  constructor() { }

  ngOnInit() {
    this.descripcion = sessionStorage["descripcion"];
  }

  openSidebar() {
    this.abrir = true;
    document.getElementById("main")!.style.marginLeft = "0%";
    document.getElementById("mySidebar")!.style.width = "265px";
    document.getElementById("mySidebar")!.style.display = "block";
    document.getElementById("openNav")!.style.display = 'none';
    document.getElementById("box")!.style.marginLeft = "265px";
    document.getElementById("box")!.style.width = "85%";
  }

  closeSidebar() {
    this.abrir = false;
    document.getElementById("main")!.style.marginLeft = "0%";
    document.getElementById("mySidebar")!.style.display = "none";
    document.getElementById("openNav")!.style.display = "inline-block";
    document.getElementById("box")!.style.marginLeft = "0px";
    document.getElementById("box")!.style.width = "100%";
  }

  openNav() {
    if (this.abrir == false) {
      //document.getElementById("UserDropdown")!.style.width = "250px";
      this.abrir = true;
    } else {
      if (this.abrir == true) {
        let roles = JSON.parse(sessionStorage?.getItem('descripcionRol')!);
        console.log('roles ', roles);
        //this.alertasService.openUserInfo(this.descripcion, roles);
        //document.getElementById("UserDropdown")!.style.width = "0px";
        this.abrir = false;
      }
    }
  }
}
