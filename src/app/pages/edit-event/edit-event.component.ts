import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EventService} from '../../_services/event.service';
import {JobeService} from '../../_services/jobe.service';
import {DomaineService} from '../../_services/domaine.service';
import {FundereService} from '../../_services/fundere.service';
import {ModalityService} from '../../_services/modality.service';
import {UploadFilesService} from '../../_services/file.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  currentEvent: any;
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
    private eventService: EventService,
    private jobeService: JobeService,
    private route: ActivatedRoute,
    private router: Router,
    private domainService: DomaineService,
    private funderService: FundereService,
    private modalityService: ModalityService,
    private uploadService: UploadFilesService
  ) { }

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
    this.getEvent(this.route.snapshot.paramMap.get('id'));
  }
  getEvent(id: string | null): void {
    this.eventService.getEventById(id).subscribe((event: null) => {
      this.currentEvent = event;
      this.selectedjobs=this.currentEvent.jobes;
      this.selecteddomains=this.currentEvent.domaines;
      this.selectedfunders=this.currentEvent.funderes;
      this.selectedmodalitys=this.currentEvent.modalitys;

    },
      (error: any) => {
        console.log(error);

      });
  }

  setAvailableStatus(): void {
    const data = {
      name: this.currentEvent.name
    };
    this.eventService.updateEvent(this.currentEvent.id, data, this.currentEvent.jobids,
      this.currentEvent.domainids,this.currentEvent.funderids,this.currentEvent.modalitysids)
      .subscribe(
        response => {

          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  updateEvent(): void {
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
    this.eventService.updateEvent(this.currentEvent.id, this.currentEvent, uniqueJobsIds.toString(),
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
    this.router.navigate(['event']);
  }
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
