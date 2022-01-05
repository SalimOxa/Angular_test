import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Formation} from '../../formation.models';
import {FormationService} from '../../_services/formation.service';
import {Domaine} from '../../domaine';
import {Jobe} from '../../jobe.models';
import {Modality} from '../../modality.models';
import {Fundere} from '../../fundere.models';
import {TokenStorageService} from '../../_services/token-storage.service';
import {PanierService} from '../../_services/panier.service';
import {AuthService} from '../../_services/auth.service';
import {Panier} from '../../panier';
import {User} from '../../User';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss']
})
export class DetailFormationComponent implements OnInit {
id: number;
formation: Formation;
  domains: Domaine[] = [];
  jobs: Jobe[] = [];
  modalitys: Modality[] = [];
  funders: Fundere[] = [];
  public copy: string;
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  panier: Panier = new Panier();
  user: User = new User();
  training: Formation = new Formation();
  currentUser: any;
  message = '';
  submitted = false;

  constructor( private formationService: FormationService,
    private route: ActivatedRoute, private panierService: PanierService,
               private userService: AuthService,
    private router: Router, private tokenStorageService: TokenStorageService) { }

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
    this.formation = new Formation();
    this.formationService.getFormationById(this.id).subscribe(data => {
      this.formation = data;
    });
    this.currentUser = this.tokenStorageService.getUser();
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
    // this.userService.getUserById(this.tokenStorageService.getUser()).subscribe(
    //   res => this.user = res,
    //   err => console.log(err)
    // );
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

// console.log(this.user)
    this.panierService.createPanier(this.currentUser.id, this.formation.id, this.panier) .subscribe(data => {
    //   this.panier.user = this.user;
    //   this.panier.training = this.training;
    //   // this.formationService.getFormationById(this.id)
    //   // this.userService.getUserById(this.currentUser.id)
    //   this.formation = data;
    //   this.currentUser = data;
    }, error => { console.log(error); });

    //      }, error => { console.log(error); });
    console.log(this.formation);
    console.log(this.currentUser);
    //
    // this.formationService.getFormationById(this.id).subscribe(data => {
    //   this.formation = data;
    //   console.log(data);
    // });
    // this.userService.getUserById(this.currentUser.id)
    //   .subscribe(
    //     (book: null) => {
    //       this.currentUser = book;
    //       console.log(book);
    //     },
    //     (error: any) => {
    //       console.log(error);
    //     });
    //     this.formation = data;
    //     this.currentUser = data;
      // .subscribe(data => console.log(data), error => console.log(error));
    // .subscribe(data => {
    //       this.id
    //       this.currentUser
    this.panier = new Panier();
  }
gotoformationlist() {
  this.router.navigate(['formation']);
}
}
