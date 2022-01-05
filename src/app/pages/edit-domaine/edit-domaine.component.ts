import { Component, OnInit } from '@angular/core';
import {Role} from '../../role';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomaineService} from '../../_services/domaine.service';

@Component({
  selector: 'app-edit-domaine',
  templateUrl: './edit-domaine.component.html',
  styleUrls: ['./edit-domaine.component.scss']
})
export class EditDomaineComponent implements OnInit {
  currentBook: any;
  message = '';

  constructor(
    private booksService: DomaineService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }

  getBook(id: string | null): void {
    this.booksService.getDomainById(id)
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
      name: this.currentBook.name
    };

    this.booksService.updateDomain(this.currentBook.id, data)
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
    this.booksService.updateDomain(this.currentBook.id, this.currentBook)
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
    this.booksService.deleteDomain(this.currentBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/domaine']);
        },
        error => {
          console.log(error);
        });
  }
  reloadPage1() {
    this.router.navigate(['domaine']);

  }
}
