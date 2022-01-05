import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {Event} from '../../event.models';
import {EventService} from '../../_services/event.service';
import {JobeService} from '../../_services/jobe.service';
import {DomaineService} from '../../_services/domaine.service';
import {UploadFilesService} from '../../_services/file.service';
import {FundereService} from '../../_services/fundere.service';
import {ModalityService} from '../../_services/modality.service';


@Component({
  selector: 'app-ajout-event',
  templateUrl: './ajout-event.component.html',
  styleUrls: ['./ajout-event.component.scss']
})
export class AjoutEventComponent implements OnInit {
  form: any = {};
  submitted = false;
  events: Observable<Event[]>;
  event: Event = new Event();
  job: any[] = [];
  domain: any[] = [];
  funder:any[]=[];
  modality:any[]=[];
  filename: string;
  idSelected: number;
  isSuccessful = false;
  jobes:any;
  domaines:any;
  funderes:any;
  modalityes:any;
  isSignUpFailed = false;
  errorMessage = '';
  selectedjobs:any []=[];
  selecteddomains:any []=[];
  selectedfunders:any []=[];
  selectedmodalitys:any []=[];
  ////////////
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  selectedItems: any = []=[];
  dropdownSettingsJob: any = {};
  dropdownSettingsDomain: any = {};
  dropdownSettingsFunder: any = {};
  dropdownSettingsModality: any = {};
  constructor(
    private eventService: EventService,
    private router: Router,
    private jobeService: JobeService,
    private domainService: DomaineService,
    private uploadService: UploadFilesService,
    private funderService: FundereService,
    private modalityService :ModalityService

  ) { }

  ngOnInit(): void {
    this.jobeService.getJobsList().subscribe(
      res => this.jobes = res,
      err => console.log(err),
      () => {
        console.log(this.jobes);
      }
    );
    this.dropdownSettingsJob={
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
    this.dropdownSettingsModality={
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

  }

  onselectjob(event: any) {
    this.selectedjobs.push(event);
    console.log(this.selectedjobs);

  }
  onSelectAll(ids: any) {
    console.log('onSelectAll', ids);
  }

  onDeselectedJob($event){
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
  onSubmit() {
    this.submitted = true;
    this.save();

    this.reloadPage1();
    if (this.form.invalid) {
      return;
    }
  }
  newEvent(): void {
    this.submitted = false;
    this.event = new Event();
  }
  save() {
    this.form.photo = this.filename;

    let jobsIdsList :any[] =this.selectedjobs.map(x=> x.id);
    var uniqueJobsIds = jobsIdsList.filter(function(elem, index, self) {
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
    this.eventService.addEvent(this.form,uniqueJobsIds.toString(),uniqueDomainIds.toString(),uniqueFunderIds.toString(),uniqueModalityIds.toString())
      .subscribe(data => {

        console.log(data);

      }, error => { console.log(error) });
    this.event = new Event();

  }
  reloadPage1() {
    this.router.navigate(['event']);

  }
  selectFiles(event) {
    console.log(event[0]);
    this.uploadService.upload(event[0]).subscribe(a => {
      this.filename = event[0].name;
      console.log("file");
    })
  }



}
