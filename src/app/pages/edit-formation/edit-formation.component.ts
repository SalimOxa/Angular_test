import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormationService} from '../../_services/formation.service';
import {JobeService} from '../../_services/jobe.service';
import {DomaineService} from '../../_services/domaine.service';
import {FundereService} from '../../_services/fundere.service';
import {ModalityService} from '../../_services/modality.service';
import {UploadFilesService} from '../../_services/file.service';
import {Domaine} from '../../domaine';
import {Modality} from '../../modality.models';
import {Jobe} from '../../jobe.models';
import {Fundere} from '../../fundere.models';
import {Formation} from '../../formation.models';
import {Role} from '../../role';
import {AuthService} from '../../_services/auth.service';



@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss']
})
export class EditFormationComponent implements OnInit {
  currentBook: any;
  form: any = {};
  message = '';
  jobes: any;
  job: any[] = [];
  domaines: any;
  domain: any[] = [];
  funderes: any;
  funder: any[] = [];
  modalityes: any;
  modality: any[] = [];
  currentJob: any;
  filename: string;
  ////////////////////
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedItems: any = [] = [];
  dropdownSettingsJob: any = {};
  dropdownSettingsDomain: any = {};
  dropdownSettingsFunder: any = {};
  dropdownSettingsModality: any = {};
  selectedjobs: any[] = [];
  selecteddomains: any[] = [];
  selectedfunders: any[] = [];
  selectedmodalitys: any[] = [];

  constructor(
    private booksService: FormationService,
    private jobeService: JobeService,
    private route: ActivatedRoute,
    private router: Router,
    private domainService: DomaineService,
    private funderService: FundereService,
    private modalityService: ModalityService,
    private uploadService: UploadFilesService
  ) {
  }

  ngOnInit(): void {
    this.message = '';
    this.jobeService.getJobsList().subscribe(
      res => this.jobes = res,
      err => console.log(err),
      () => {
        console.log(this.jobes);
      }

    );
    this.dropdownSettingsJob = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      //allowSearchFilter: this.ShowFilter
    };
    this.domainService.getDomainsList().subscribe(
      res => this.domaines = res,
      err => console.log(err),
      () => {
        console.log(this.domaines);
      }
    );
    this.dropdownSettingsDomain={
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      //allowSearchFilter: this.ShowFilter
    };
    this.funderService.getFundersList().subscribe(
      res => this.funderes = res,
      err => console.log(err),
      () => {
        console.log(this.funderes);
      }
    );
    this.dropdownSettingsFunder={
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      //allowSearchFilter: this.ShowFilter
    };
    this.modalityService.getModalitysList().subscribe(
      res => this.modalityes = res,
      err => console.log(err),
      () => {
        console.log(this.modalityes);
      }
    );
    this.dropdownSettingsModality={
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      //allowSearchFilter: this.ShowFilter
    };
    console.log(this.modalityes);
    this.getFormation(this.route.snapshot.paramMap.get('id'));
  }
  getFormation(id: string | null): void {
    this.booksService.getFormationById(id).subscribe((event: null) => {
        this.currentBook = event;
        this.selectedjobs=this.currentBook.jobs;
        this.selecteddomains=this.currentBook.domains;
        this.selectedfunders=this.currentBook.funders;
        this.selectedmodalitys=this.currentBook.modalitys;

      },
      (error: any) => {
        console.log(error);

      });
  }

  // getBook(id: string | null): void {
  //   this.booksService.getFormationById(id)
  //     .subscribe(
  //       (book: null) => {
  //         this.currentBook = book;
  //         console.log(book);
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       });
  // }

  // setAvailableStatus(): void {
  //   const data = {
  //     titre: this.currentBook.titre,
  //     description: this.currentBook.description,
  //     conditions: this.currentBook.conditions,
  //     domains: this.currentBook.domains
  //   };
  //
  //   this.booksService.updateFormation(this.currentBook.id, data)
  //     .subscribe(
  //       response => {
  //         // this.currentBook.available = status;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  etAvailableStatus(): void {
    const data = {
      name: this.currentBook.name
    };
    this.booksService.updateFormation(this.currentBook.id, data, this.currentBook.jobids,
      this.currentBook.domainids,this.currentBook.funderids,this.currentBook.modalitysids)
      .subscribe(
        response => {

          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  // updateBook(): void {
  //   this.booksService.updateFormation(this.currentBook.id, this.currentBook)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.message = 'The product was updated!';
  //       },
  //       error => {
  //         console.log(error);
  //       });
  //   this.reloadPage1();
  // }
  updateFormation(): void {
    this.form.photo = this.filename;

    let jobsIdsList: any[] = this.selectedjobs.map(x => x.id);
    var uniqueJobsIds = jobsIdsList.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    })
    let domainIdsList : any[]=this.selecteddomains.map(x =>x.id);
    var uniqueDomainIds= domainIdsList.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    let funderIdsList : any[]=this.selectedfunders.map(x =>x.id);
    var uniqueFunderIds= funderIdsList.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    let modalityIdsList : any[]=this.selectedmodalitys.map(x =>x.id);
    var uniqueModalityIds=modalityIdsList.filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    })
    this.booksService.updateFormation(this.currentBook.id, this.currentBook, uniqueJobsIds.toString(),
      uniqueDomainIds.toString(),uniqueFunderIds.toString(),uniqueModalityIds.toString())
      .subscribe(reponse => {
          console.log(reponse);
          this.message = 'the event was updated!';

        },
        error => {
          console.log(error);
        });
    this.reloadPage1();
  }
  reloadPage1() {
    this.router.navigate(['formations']);
  }
  // compareFn(role1, role2) {
  //   return role1 && role2 ? role1.id === role2.id : role1 === role2;
  // }
  onselectjob(event: any) {
    this.selectedjobs.push(event);
    console.log(this.selectedjobs);

  }
  onSelectAll(ids: any) {
    console.log('onSelectAll', ids);
  }

  onDeselectedJob($event) {
    this.selectedjobs = this.selectedjobs.filter(obj => obj !== event);
    console.log(this.selectedjobs);
  }

  onselectdomain(event:any){
    this.selecteddomains.push(event);
    console.log(this.selecteddomains);
  }
  onDeselectedDomain($event){
    this.selecteddomains = this.selecteddomains.filter(obj => obj !== event);
    console.log(this.selecteddomains);
  }
  onSelectAlldomain(ids: any) {
    console.log('onSelectAll', ids);
  }
  onselectfunder(event:any){
    this.selectedfunders.push(event);
    console.log(this.selectedfunders);
  }
  onDeselectedFunder($event){
    this.selectedfunders = this.selectedfunders.filter(obj => obj !== event);
    console.log(this.selectedfunders);
  }
  onSelectAllfunder(ids: any) {
    console.log('onSelectAll', ids);
  }
  onselectmodality(event:any){
    this.selectedmodalitys.push(event);
    console.log(this.selectedmodalitys);
  }
  onDeselectedModality($event){
    this.selectedmodalitys=this.selectedmodalitys.filter(obj => obj !== event);
    console.log(this.selectedmodalitys);
  }
  onSelectAllmodality(ids: any){
    console.log('onSelectAll', ids);
  }

  selectFiles(event) {
    console.log(event[0]);
    this.uploadService.upload(event[0]).subscribe(a => {
      this.filename = event[0].name;
      console.log("file");
    })
  }
}
