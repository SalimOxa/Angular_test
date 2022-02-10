import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Formation} from '../../formation.models';
import {FormationService} from '../../_services/formation.service';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-formation-presentiel',
  templateUrl: './formation-presentiel.component.html',
  styleUrls: ['./formation-presentiel.component.scss']
})
export class FormationPresentielComponent implements OnInit {
  formation: Formation;
  data: any;
  message: any;
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  public formations:any;

  p:number=1;
  imgUrl:string = "http://localhost:8080/files/img1.jpg";
  constructor(
    private formationService: FormationService,
    private router: Router,
    private http:HttpClient, private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.Getformation();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
  }



  public Getformation(): void {
    this.formationService.getFormationsPresentielList().subscribe(
      (response: Formation[]) => {
        this.formations = response;
        console.log(this.formations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  deleteFormation(formation: Formation): void {
    this.formationService.deleteFormation(formation.id)
      .subscribe( data => {
        this.formations = this.formations.filter(u => u !== formation);
      });

  }
  gotoajout() {
    this.router.navigate(['ajout-formation']);
  }
}
