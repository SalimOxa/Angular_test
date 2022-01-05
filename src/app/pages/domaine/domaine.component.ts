import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DomaineService} from '../../_services/domaine.service';
import {Domaine} from '../../domaine';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.scss']
})
export class DomaineComponent implements OnInit {
  domaines: Domaine[];
  domaine: Domaine;
  data: any;
  message: any;
  constructor(private domaineService: DomaineService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    // this.users = this.userService.getEmployeesList();
    this.domaineService.getDomainsList().subscribe(
      res => {
        this.domaines = res;
      },
      err => console.log(err)
    );
  }
  // private getDomains() {
  //   this.domaineService.getDomainsList().subscribe(data => {
  //     this.domaines = data;
  //   });
  // }
  // updateDomain(id: number) {
  //   this.router.navigate(['update-domain', id]);
  // }
  // deleteDomain(id: number) {
  //   this.domaineService.deleteDomain(id).subscribe(data => {
  //     console.log(data);
  //     this.getDomains();
  //   });
  // }
  deleteDomain(domaine: Domaine): void {
    this.domaineService.deleteDomain(domaine.id)
      .subscribe( data => {
        this.domaines = this.domaines.filter(u => u !== domaine);
      });
  }
  gotoajout() {
    this.router.navigate(['ajout-domaine']);
  }
  // domainDetails(id: number) {
  //   this.router.navigate(['domain-details']);
  // }
}
