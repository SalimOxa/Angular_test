import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Role} from '../../role';
import {User} from '../../User';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  currentBook: any;
  message = '';
  roles: Role[] = [];

  constructor(
    private booksService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
    this.booksService.getRoleList().subscribe(
      res => this.roles = res,
      err => console.log(err),
      () => {
        console.log(this.roles);
      }
    );
  }

  getBook(id: string | null): void {
    this.booksService.getUserById(id)
      .subscribe(
        (book: null) => {
          this.currentBook = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }

  setAvailableStatus(): void {
    const data = {
      username: this.currentBook.username,
      email: this.currentBook.email,
      password: this.currentBook.password,
      tel: this.currentBook.tel,
      role: this.currentBook.role
    };

    this.booksService.updateUser2(this.currentBook.id, data)
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
    this.booksService.updateUser2(this.currentBook.id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
        },
        error => {
          console.log(error);
        });
    this.reloadPage1();
  }

  deleteBook(): void {
    this.booksService.deleteUser(this.currentBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tables']);
        },
        error => {
          console.log(error);
        });
  }
  compareFn(role1, role2) {
    return role1 && role2 ? role1.id === role2.id : role1 === role2;
  }
  getRole(role: string) {
    return role.substring(role.indexOf('_') + 1, role.length);
  }
  reloadPage1() {
    this.router.navigate(['tables']);
  }
}
