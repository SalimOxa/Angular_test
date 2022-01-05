import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EventService} from '../../_services/event.service';
import {Event} from '../../event.models';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Panier} from '../../panier';
import {PanierService} from '../../_services/panier.service';
import {AuthService} from '../../_services/auth.service';


@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.scss']
})
export class DetailEventComponent implements OnInit {
  id: number;
  event: Event;
  jobes:any;
  domaines:any;
  funderes:any;
  modalityes:any;
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  submitted = false;
  currentUser: any;
  panier: Panier = new Panier();
  message = '';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router, private tokenStorageService: TokenStorageService,
    private panierService: PanierService,
    private userService: AuthService,

  ) { }

  Submit() {
    this.submitted = true;
    this.save();
    location.reload();
    // this.reloadPage1();

    // display form values on success
    alert('ajout commande avec succés');
  }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
    this.id = this.route.snapshot.params['id'];
    this.event = new Event();
    this.eventService.getEventById(this.id).subscribe(
      data => {
        this.event = data;
      }
    );
    this.currentUser = this.tokenStorageService.getUser();
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  getBook(id: string | null): void {
    this.userService.getUserById(this.currentUser.id)
      .subscribe(
        (book: null) => {
          this.currentUser = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }
  save() {

    this.panierService.createPanier1(this.currentUser.id, this.event.id, this.panier) .subscribe(data => {

    }, error => { console.log(error); });
    console.log(this.event);
    console.log(this.currentUser);
    this.panier = new Panier();
  }
gotoeventList(){
  this.router.navigate(['events']);
}
}
