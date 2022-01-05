import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Fundere} from '../../fundere.models';
import {FundereService} from '../../_services/fundere.service';


@Component({
  selector: 'app-ajout-fundere',
  templateUrl: './ajout-fundere.component.html',
  styleUrls: ['./ajout-fundere.component.scss']
})
export class AjoutFundereComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  Funderes: Observable<Fundere[]>;
  fundere: Fundere = new Fundere();

  constructor(private fundereService: FundereService, private router: Router) { }

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
    alert('ajout ticket avec succés');

  }
  newFundere(): void {
    this.submitted = false;
    this.fundere = new Fundere();
  }
  save() {
    this.fundereService.createFunder(this.form)
      .subscribe(data => console.log(data), error => console.log(error));
    this.fundere = new Fundere();
  }
  reloadPage1() {
    this.router.navigate(['fundere']);

  }
}
