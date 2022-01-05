import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Panier} from '../../panier';
import {Observable} from 'rxjs';
import {PanierService} from '../../_services/panier.service';

@Component({
  selector: 'app-ajout-panier',
  templateUrl: './ajout-panier.component.html',
  styleUrls: ['./ajout-panier.component.scss']
})
export class AjoutPanierComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  paniers: Observable<Panier[]>;
  panier: Panier = new Panier();


  constructor(private panierService: PanierService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    // location.reload();
    this.reloadPage1();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

  }

  newPanier(): void {
    this.submitted = false;
    this.panier = new Panier();
  }
  save() {
    // this.panierService.createPanier(this.form)
    //   .subscribe(data => console.log(data), error => console.log(error));
    // this.panier = new Panier();
  }
  reloadPage1() {
    this.router.navigate(['panier']);

  }
}
