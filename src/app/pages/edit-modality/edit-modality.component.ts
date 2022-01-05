import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ModalityService} from '../../_services/modality.service';

@Component({
  selector: 'app-edit-modality',
  templateUrl: './edit-modality.component.html',
  styleUrls: ['./edit-modality.component.scss']
})
export class EditModalityComponent implements OnInit {
  currentBook: any;
  message = '';
  constructor(   private booksService: ModalityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }
  getBook(id: string | null): void {
    this.booksService.getModalityById(id)
      .subscribe(
        (book: null) => {
          this.currentBook = book;
          console.log(book);
        },
        (error: any) => {
          console.log(error);
        });
  }
  updateBook(): void {
    this.booksService.updateModality(this.currentBook.id, this.currentBook)
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
  reloadPage1() {
    this.router.navigate(['modality']);

  }



}
