import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Jobe} from '../../jobe.models';
import {JobeService} from '../../_services/jobe.service';


@Component({
  selector: 'app-ajout-jobe',
  templateUrl: './ajout-jobe.component.html',
  styleUrls: ['./ajout-jobe.component.scss']
})
export class AjoutJobeComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  jobes: Observable<Jobe[]>;
  jobe: Jobe = new Jobe();


  constructor(private jobeService: JobeService, private router: Router) { }

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

  newJobe(): void {
    this.submitted = false;
    this.jobe = new Jobe();
  }
  save() {
    this.jobeService.createJob(this.form)
      .subscribe(data => console.log(data), error => console.log(error));
    this.jobe = new Jobe();
  }
  reloadPage1() {
    this.router.navigate(['jobs']);

  }
}
