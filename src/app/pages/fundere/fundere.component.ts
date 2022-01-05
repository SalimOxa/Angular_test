import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Fundere} from '../../fundere.models';
import {FundereService} from '../../_services/fundere.service';

@Component({
  selector: 'app-fundere',
  templateUrl: './fundere.component.html',
  styleUrls: ['./fundere.component.scss']
})
export class FundereComponent implements OnInit {
  funderes: Fundere[];
  fundere: Fundere;
  data: any;
  message: any;

  constructor(private fundereService: FundereService, private router: Router) { }

  ngOnInit(): void {this.reloadData();
  }
  reloadData() {
    // this.users = this.userService.getEmployeesList();
    this.fundereService.getFundersList().subscribe(
      res => {
        this.funderes = res;
      },
      err => console.log(err)
    );
  }

  deleteFunder(fundere: Fundere): void {
    this.fundereService.deleteFunder(fundere.id)
      .subscribe( data => {
        this.funderes = this.funderes.filter(u => u !== fundere);
      });
  }
  gotoajout() {
    this.router.navigate(['ajout-fundere']);
  }


}
