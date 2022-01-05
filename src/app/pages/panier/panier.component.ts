import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PanierService} from '../../_services/panier.service';
import {Panier} from '../../panier';
import {Formation} from '../../formation.models';
import {Observable} from 'rxjs';
import {User} from '../../User';
import {Event} from '../../event.models';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  // panier: Panier;
  paniers: Panier [] = [];
  training: Formation;
  event: Event;
  // formation: Observable<Formation[]>;
  panier = new Array<Panier>();
  currentUser: any;
  email: string;
  nbr: number;

  constructor(private panierService: PanierService,
              private tokenStorageService: TokenStorageService, private router: Router,
              private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.reloadData();

      // this.panier = new Panier();

    }
  reloadData(){
    this.currentUser = this.tokenStorageService.getUser();
    this.panierService.getPanierByEmail(this.tokenStorageService.getEmail()).subscribe(data => {
      // this.panier = data;
       //this.removeDuplicates(data);
       // console.log(data)
        const filteredArray = data.filter( (ele,pos)=>data.indexOf(ele) == pos);

      this.panier = filteredArray;
      },
      err => console.error(err),
      () => console.log('completed') );
    this.panierService.getTotalPrix().subscribe(
      res => this.nbr = res,
      err => console.log(err)
    );
  }

  deletePanier(panier: Panier): void {
    this.panierService.deletePanier(panier.id)
      .subscribe( data => {
        this.paniers = this.paniers.filter(u => u !== panier);
      });
    location.reload();
    alert('voulez vous supprimer cette commande ?');
  }
  removeDuplicates(data) {
    let unique = {};
    data.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }
}
