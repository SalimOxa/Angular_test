import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormationService} from '../../_services/formation.service';
import {Formation} from '../../formation.models';
import {TokenStorageService} from '../../_services/token-storage.service';


@Component({
  selector: 'app-formation-immobilier',
  templateUrl: './formation-immobilier.component.html',
  styleUrls: ['./formation-immobilier.component.scss']
})
export class FormationImmobilierComponent implements OnInit {
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  formation: Formation;
  data: any;
  message: any;
  p:number=1;
  public formations:any;
  constructor(private formationService: FormationService,
    private router: Router, private tokenStorageService: TokenStorageService ) { }

  ngOnInit(): void {
    this.reloadData();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
    this.Getformationimmobilier();
  }
  Getformationimmobilier(): void {
    this.formationService.getFormationsimmobilierList().subscribe(
      (response: Formation[]) => {
        this.formations = response;
        console.log(this.formations);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    //
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  reloadData() {
    // this.users = this.userService.getEmployeesList();
    this.formationService.getFormationsList().subscribe(
      res => {
        this.formations = res;
      },
      err => console.log(err)
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
  getRole(job: string) {
    const name = job.substring(job.indexOf('_') + 1, job.length);
    return name;
    console.log(name);
  }
}

