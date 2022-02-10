import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';

@Component({
  selector: 'app-contact-nous',
  templateUrl: './contact-nous.component.html',
  styleUrls: ['./contact-nous.component.scss']
})
export class ContactNousComponent implements OnInit {
  isLoggedIn = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

}
