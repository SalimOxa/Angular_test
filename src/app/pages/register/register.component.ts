import { Component, OnInit } from '@angular/core';
import {User} from '../../User';
import {Observable} from 'rxjs';
import {AuthService} from '../../_services/auth.service';
import {Router} from '@angular/router';
import {Role} from '../../role';
import {UploadFilesService} from '../../_services/file.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;
  users: Observable<User[]>;
  user: User = new User();
  public filename: string;

  constructor(private authService: AuthService, private router: Router, private uploadService: UploadFilesService,
  ) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    this.save();
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
    this.form.photo = this.filename;
    this.authService.register1(this.form)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
  reloadPage1() {
    this.router.navigate(['/login']);
  }
  selectFiles(event) {
    console.log(event[0]);
    this.uploadService.upload(event[0]).subscribe(a => {
      this.filename = event[0].name;
      console.log("file");
    })
  }

}
