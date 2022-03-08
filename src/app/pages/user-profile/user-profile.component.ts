import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Role} from '../../role';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: any;
  message = '';
  roles: Role[] = [];

  constructor(private token: TokenStorageService,  private booksService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
    this.booksService.getRoleList().subscribe(
      res => this.roles = res,
      err => console.log(err),
      () => {
        // console.log(this.roles);
      }
    );
  }

  getBook(id: string | null): void {
    this.booksService.getUserById(this.currentUser.id)
      .subscribe(
        (book: null) => {
          this.currentUser = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(): void {
    const data = {
      username: this.currentUser.username,
      email: this.currentUser.email,
      // password: this.currentUser.password,
      tel: this.currentUser.tel,
      role: this.currentUser.role
    };

    this.booksService.updateUser2(this.currentUser.id, data)
      .subscribe(
        response => {
          // this.currentBook.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateBook(): void {
    this.booksService.updateUser2(this.currentUser.id, this.currentUser)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
    location.reload();
    // this.reloadPage1();
  }

  // deleteBook(): void {
  //   this.booksService.deleteUser(this.currentUser.id)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.router.navigate(['/tables']);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  compareFn(role1, role2) {
    return role1 && role2 ? role1.id === role2.id : role1 === role2;
  }
  getRole(role: string) {
    return role.substring(role.indexOf('_') + 1, role.length);
  }
  reloadPage1() {
    this.router.navigate(['user-profile']);
  }
}
