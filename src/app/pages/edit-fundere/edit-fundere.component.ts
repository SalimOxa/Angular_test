import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FundereService} from '../../_services/fundere.service';

@Component({
  selector: 'app-edit-fundere',
  templateUrl: './edit-fundere.component.html',
  styleUrls: ['./edit-fundere.component.scss']
})
export class EditFundereComponent implements OnInit {
  currentBook: any;
  message = '';
  constructor(   private booksService: FundereService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  getBook(id: string | null): void {
    this.booksService.getFunderByID(id)
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
    this.booksService.updateFunder(this.currentBook.id, data)
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
    this.booksService.updateFunder(this.currentBook.id, this.currentBook)
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
    this.booksService.deleteFunder(this.currentBook.id)
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
    this.router.navigate(['fundere']);

  }
}
