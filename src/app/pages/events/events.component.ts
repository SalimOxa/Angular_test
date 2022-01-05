import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventService} from '../../_services/event.service';
import {Event} from '../../event.models';
import {NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {TokenStorageService} from '../../_services/token-storage.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[];
  data: any;
  message: any;
  p:number=1;
  showAdminBoard = false;
  showUserBoard = false;
  isLoggedIn = false;
  private roles: string[];

  constructor(
    private eventService: EventService,
    private router: Router, config: NgbModalConfig, private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.reloadData();this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
    }
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  // }
  reloadData() {
    this.eventService.getEventList().subscribe(res => {
      this.events = res;
    },
      err => console.log(err)
    );
  }
  deleteEvent(event: Event): void {
    this.eventService.deleteEvent(event.id).subscribe
      (data => {
        this.events = this.events.filter(u => u !== event);
      });
  }
  gotoajout(){
    this.router.navigate(['ajout-event']);
  }
}
