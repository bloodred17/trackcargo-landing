import { Component, OnInit } from "@angular/core";
import { ConstantService } from "../../../services/constant.service";
import { Link } from "../../../types/interfaces";

export interface NavBarItem {
  name: string;
  iconClass?: string;
  link?: NavLink;
}

@Component({
  selector: "app-index-navbar",
  templateUrl: "./index-navbar.component.html",
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  navLeftItems: NavBarItem[] = [
    // {
    //   name: 'Docs',
    //   link: new NavLink({link: 'https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus?ref=na-index-navbar'}),
    //   iconClass: 'far fa-file-alt'
    // },
    {
      name: "Docs",
      link: new NavLink({
        link: "https://shipthis-track-trace-tbx6fra52a-uc.a.run.app/docs",
      }),
      iconClass: "far fa-file-alt",
    },
  ];

  constructor(public constant: ConstantService) {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}

class NavLink implements Link {
  value;
  type;

  constructor(init?: Partial<NavLink>) {
    if (init) {
      Object.assign(this, init);
    }
  }

  set link(value: string) {
    try {
      this.value = value;
      const linkTestRegex = /(^http:\/\/)|(^https:\/\/)/;
      this.type = linkTestRegex.test(this.value) ? "external" : "internal";
    } catch (e) {
      console.log(e);
    }
  }
}
