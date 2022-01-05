import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Modality} from '../../modality.models';
import {ModalityService} from '../../_services/modality.service';


@Component({
  selector: 'app-ajout-modality',
  templateUrl: './ajout-modality.component.html',
  styleUrls: ['./ajout-modality.component.scss']
})
export class AjoutModalityComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  modalitys: Observable<Modality[]>;
  modality: Modality = new Modality();

  constructor(private modalityService: ModalityService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    // location.reload();
    this.reloadPage1();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    alert('ajout domaine avec succés');

  }
    newModality(): void {
      this.submitted = false;
      this.modality = new Modality();
    }
    save() {
      this.modalityService.createModality(this.form)
        .subscribe(data => console.log(data), error => console.log(error));
      this.modality = new Modality();
    }
    reloadPage1() {
      this.router.navigate(['modality']);
    }
  }



