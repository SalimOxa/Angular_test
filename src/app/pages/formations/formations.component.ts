import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Formation} from '../../formation.models';
import {FormationService} from '../../_services/formation.service';
import {Jobe} from '../../jobe.models';
import {Domaine} from '../../domaine';
import {TokenStorageService} from '../../_services/token-storage.service';
import {NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  public focus;
  formations: Formation[];
  formation: Formation;
  data: any;
  message: any;
  jobs: Jobe[] = [];
  domains: Domaine[] = [];
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  p:number=1;
  imgUrl:string = "http://localhost:8080/files/img1.jpg";
  constructor(private formationService: FormationService, config: NgbModalConfig, private router: Router, private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.reloadData();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
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
