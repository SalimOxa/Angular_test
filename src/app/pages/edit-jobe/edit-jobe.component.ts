import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {JobeService} from '../../_services/jobe.service';

@Component({
  selector: 'app-edit-jobe',
  templateUrl: './edit-jobe.component.html',
  styleUrls: ['./edit-jobe.component.scss']
})
export class EditJobeComponent implements OnInit {
  currentBook: any;
  message = '';
  constructor(private booksService: JobeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  getBook(id: string | null): void {
    this.booksService.getJobById(id)
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

    this.booksService.updateJob(this.currentBook.id, data)
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
    this.booksService.updateJob(this.currentBook.id, this.currentBook)
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
    this.booksService.deleteJob(this.currentBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/jobe']);
        },
        error => {
          console.log(error);
        });
  }
  reloadPage1() {
    this.router.navigate(['jobs']);

  }

}
