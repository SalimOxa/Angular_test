import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Modality} from '../../modality.models';
import {ModalityService} from '../../_services/modality.service';


@Component({
  selector: 'app-modality',
  templateUrl: './modality.component.html',
  styleUrls: ['./modality.component.scss']
})
export class ModalityComponent implements OnInit {
  modalitys: Modality[];
  modality: Modality;
  data: any;
  message: any;

  constructor(private modalityService: ModalityService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.users = this.userService.getEmployeesList();
    this.modalityService.getModalitysList().subscribe(
      res => {
        this.modalitys = res;
      },
      err => console.log(err)
    );
  }
  deleteModality(modality: Modality): void {
    this.modalityService.deleteModality(modality.id)
      .subscribe( data => {
        this.modalitys = this.modalitys.filter(u => u !== modality);
      });
  }
  gotoajout() {
    this.router.navigate(['ajout-modality']);
  }
}
