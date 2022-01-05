import { Component, OnInit } from '@angular/core';
import {User} from '../../User';
import {AuthService} from '../../_services/auth.service';
import {Router} from '@angular/router';
import {Role} from '../../role';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  etat = true;
  idSelected: number;
  idSelected2: number;
  submitted = false;
  users: Observable<User[]>;
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.save();
     location.reload();
    this.reloadPage1();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }
  compareFn(user1: Role, user2: Role) {
    return user1 && user2 ? user1.id === user2.id : user1 === user2;
  }
  save() {
    this.authService.register(this.form)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
  reloadPage1() {
    this.router.navigate(['/tables']);

  }
}
