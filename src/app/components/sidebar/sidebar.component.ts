import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUT: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  // { path: '/quisommenous', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },
  // { path: '/parole_d'expert', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
  { path: '/user-profile', title: 'profil',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Liste des utilisateurs',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/domaine', title: 'Domaines de formation',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/fundere', title: 'Financeurs possibles',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/jobs', title: 'Métiers visés',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/modality', title: 'Modalités de formation',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/formation', title: 'Formations',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/events', title: 'Evenements',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/assurance-formation', title: 'formation assurance',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/banque-formation', title: 'formation banque',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/immobilier-formation', title: 'formation immobilier',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/panier', title: 'panier',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];
export const ROUTESS: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
  // { path: '/quisommenous', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },
  // { path: '/parole_d'expert', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
  // { path: '/user-profile', title: 'profil',  icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/tables', title: 'Liste des utilisateurs',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/domaine', title: 'Domaines de formation',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/fundere', title: 'Financeurs possibles',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/jobs', title: 'Métiers visés',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/modality', title: 'Modalités de formation',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/formation', title: 'Formations',  icon: 'ni-bullet-list-67 text-red', class: '' },
  { path: '/events', title: 'Evenements',  icon: 'ni-bullet-list-67 text-red', class: '' },
  // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
  // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'A propos',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/formation', title: 'Formation',  icon: 'ni-bullet-list-67 text-red', class: '' },
    { path: '/events', title: 'Evenement',  icon: 'ni-bullet-list-67 text-red', class: '' },
  // { path: '/quisommenous', title: 'Icons',  icon: 'ni-planet text-blue', class: '' },
    // { path: '/parole_d'expert', title: 'Maps',  icon: 'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'profil',  icon: 'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Liste des utilisateurs',  icon: 'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItemss: any[];
  public menuItems: any[];
  public isCollapsed = true;
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  categories: any[];
  constructor(private router: Router, private tokenStorageService: TokenStorageService) {
    this.categories = [
      {
        path: '/assurance-formation',
        id: "1",
        name: "Assurance",
       icon: 'ni-bullet-list-67 text-red'
      },
      {
        id: "2",
        name: "Banque",
        path: '/banque-formation'
      }
    ];
  }
  ngOnInit() {
    this.menuItemss = ROUTESS.filter(menuItems => menuItems);
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      // this.username = user.username;
    }
  }
}
