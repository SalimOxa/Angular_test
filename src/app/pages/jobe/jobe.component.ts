import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {JobeService} from '../../_services/jobe.service';
import {Jobe} from '../../jobe.models';


@Component({
  selector: 'app-jobe',
  templateUrl: './jobe.component.html',
  styleUrls: ['./jobe.component.scss']
})
export class JobeComponent implements OnInit {
jobes: Jobe[];
jobe: Jobe;
data: any;
message: any;

  constructor(private jobeService: JobeService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.users = this.userService.getEmployeesList();
    this.jobeService.getJobsList().subscribe(
      res => {
        this.jobes = res;
      },
      err => console.log(err)
    );
  }

  deleteJob(jobe: Jobe): void {
    this.jobeService.deleteJob(jobe.id)
      .subscribe( data => {
        this.jobes = this.jobes.filter(u => u !== jobe);
      });
  }
  gotoajout() {
    this.router.navigate(['ajout-job']);
  }



}
