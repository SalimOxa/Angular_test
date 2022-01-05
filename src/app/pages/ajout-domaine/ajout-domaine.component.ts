import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Role} from '../../role';
import {Observable} from 'rxjs';
import {DomaineService} from '../../_services/domaine.service';
import {Domaine} from '../../domaine';

@Component({
  selector: 'app-ajout-domaine',
  templateUrl: './ajout-domaine.component.html',
  styleUrls: ['./ajout-domaine.component.scss']
})
export class AjoutDomaineComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  domaines: Observable<Domaine[]>;
  domaine: Domaine = new Domaine();
  constructor(private domaineService: DomaineService, private router: Router) {
  }

  ngOnInit() {
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
    alert('ajout domaine avec succés');

  }

  newDomaine(): void {
    this.submitted = false;
    this.domaine = new Domaine();
  }
  // compareFn(user1: Role, user2: Role) {
  //   return user1 && user2 ? user1.id === user2.id : user1 === user2;
  // }
  save() {
    this.domaineService.createDomain(this.form)
      .subscribe(data => console.log(data), error => console.log(error));
    this.domaine = new Domaine();
  }
  reloadPage1() {
    this.router.navigate(['domaine']);

  }
}
