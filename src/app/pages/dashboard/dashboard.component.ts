import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import {FormationService} from '../../_services/formation.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../_services/token-storage.service';
import {Formation} from '../../formation.models';
import {EventService} from '../../_services/event.service';
import {User} from '../../User';
import {Role} from '../../role';
import {AuthService} from '../../_services/auth.service';
import {PaginationService} from '../../_services/pagination.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public focus;
  formations: Formation[];
  formation: Formation;
  public datasets: any;
  // public data: any;
  data: any;
  message: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];
  p:number=1;
  public countFormation:any;
  public countAssuranceFormation:any;
  public countBanqueFormation:any;
  public countImmobilierFormation :any;
  public countEnligneFormation :any;
  public countPresentielFormation:any;
  public countEvent :any;
  public countAssuranceEvent:any;
  public countBanqueEvent:any ;
  public countImmobilierEvent :any;
  users: User[] = [];
  user: User;
  // roles: Role[] = [];
  selectedUser: User;
  Articles: any;
  constructor(private formationService: FormationService,    private route: ActivatedRoute,
              config: NgbModalConfig, private eventService: EventService,
              private userService: AuthService, private router: Router,
              private modalService: NgbModal, private paginationService: PaginationService,
              private tokenStorageService: TokenStorageService){}
  ngOnInit(): void {

    this.reloadData();
    this.countTotalFormation();
    // this.countTotalEvent();
    this.countFormationAssurance();
    this.countFormationBanque();
    this.countFormationImmobilier();
    // this.countEventAssurance();
    // this.countEventBanque();
    // this.countEventImmobilier();
    this.countFormationEnligne();
    this.countFormationPresentiel();
    this.userService.getEmployeesList().subscribe(
      res => {
        this.users = res;
        // this.dataSource.data = this.users;
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      },
      err => console.log(err)
    );
    // this.datasets = [
    //   [0, 20, 10, 30, 15, 40, 20, 60, 60],
    //   [0, 20, 5, 25, 10, 30, 15, 40, 40]
    // ];
    // this.data = this.datasets[0];
    //
    //
    // var chartOrders = document.getElementById('chart-orders');
    //
    // parseOptions(Chart, chartOptions());
    //
    //
    // var ordersChart = new Chart(chartOrders, {
    //   type: 'bar',
    //   options: chartExample2.options,
    //   data: chartExample2.data
    // });
    //
    // var chartSales = document.getElementById('chart-sales');
    //
    // this.salesChart = new Chart(chartSales, {
		// 	type: 'line',
		// 	options: chartExample1.options,
		// 	data: chartExample1.data
		// });
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
  }
  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
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
  getRole(job: string) {
    const name = job.substring(job.indexOf('_') + 1, job.length);
    return name;
    console.log(name);
  }
  gotoajout() {
    this.router.navigate(['ajout-formation']);
  }


  public countTotalFormation(){
    this.formationService.getFormationCount().subscribe(data=>{
      this.countFormation=data;
      //console.log(this.nombre);
    },error=> {
      console.log(error);

    });

  }
  public countFormationAssurance(){
    this.formationService.getFormationCountAssurance().subscribe(data=>{
      this.countAssuranceFormation=data;
      console.log(this.countAssuranceFormation);

    },error=> {
      console.log(error);

    });
  }
  public countFormationBanque(){
    this.formationService.getFormationCountBanque().subscribe(data=>{
      this.countBanqueFormation=data;
      console.log(this.countBanqueFormation);
    },error=> {
      console.log(error);

    });

  }

  public countFormationImmobilier(){
    this.formationService.getFormationCountImmobilier().subscribe(data=>{
      this.countImmobilierFormation=data;
      //console.log(this.count);
    },error=> {
      console.log(error);

    });
  }
  public countFormationEnligne(){
    this.formationService.getFormationCountEnligne().subscribe(data=>{
      this.countEnligneFormation=data;
      console.log(this.countEnligneFormation);
    },error=> {
      console.log(error);

    });
  }
  public countFormationPresentiel(){
    this.formationService.getFormationCountPresentiel().subscribe(data=>{
      this.countPresentielFormation=data;
      console.log(this.countPresentielFormation);
    },error=> {
      console.log(error);

    });
  }
  // public countTotalEvent(){
  //   this.eventService.getEventCount().subscribe(data=>{
  //     this.countEvent=data;
  //     //console.log(this.count);
  //   },error=> {
  //     console.log(error);
  //
  //   });
  // }
  //
  // public countEventAssurance(){
  //   this.eventService.getEventCountAssurance().subscribe(data=>{
  //     this.countAssuranceEvent=data;
  //   },error=>{
  //     console.log(error);
  //
  //   })
  // }
  // public countEventBanque(){
  //   this.eventService.getEventCountBanque().subscribe(data=>{
  //     this.countBanqueEvent=data;
  //   },error=>{
  //     console.log(error);
  //
  //   })
  // }
  // public countEventImmobilier(){
  //   this.eventService.getEventCountImmobilier().subscribe(data=>{
  //     this.countImmobilierEvent=data;
  //   },error=>{
  //     console.log(error);
  //
  //   })
  // }
}
