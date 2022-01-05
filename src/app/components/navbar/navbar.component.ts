import { Component, OnInit, ElementRef } from '@angular/core';
import {ROUT, ROUTES, ROUTESS} from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  isLoggedIn = false;
  roles: string[] = [];
  currentUser: any;
  showAdminBoard = false;
  showUserBoard = false;
  constructor(location: Location,  private element: ElementRef, private router: Router, private tokenStorageService: TokenStorageService) {
    this.location = location;
  }

  ngOnInit() {
    this.currentUser = this.tokenStorageService.getUser();
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.listTitles = ROUTESS.filter(listTitle => listTitle);
    this.listTitles = ROUT.filter(listTitle => listTitle);
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
      // this.reloadPage1();
      this.isLoggedIn = !!this.tokenStorageService.getToken();

      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showUserBoard = this.roles.includes('ROLE_USER');
      }
    }
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 1 );
    }

    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return '';
  }
  logout() {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.reloadPage1();
   // this.gotoList();
   //  location.reload();
  }
  reloadPage1() {
    this.router.navigate(['/login']);
  }
  gotopanier() {
    this.router.navigate(['panier']);
  }
}
