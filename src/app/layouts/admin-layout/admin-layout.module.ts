import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Event, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/quisommenous/icons.component';
import { MapsComponent } from '../../pages/parole_d\'expert/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DomaineComponent} from '../../pages/domaine/domaine.component';
import {EditUsersComponent} from '../../pages/edit-users/edit-users.component';
import {AjoutUserComponent} from '../../pages/ajout-user/ajout-user.component';
import {AjoutDomaineComponent} from '../../pages/ajout-domaine/ajout-domaine.component';
import {EditDomaineComponent} from '../../pages/edit-domaine/edit-domaine.component';
import {FundereComponent} from '../../pages/fundere/fundere.component';
import {AjoutFundereComponent} from '../../pages/ajout-fundere/ajout-fundere.component';
import {EditFundereComponent} from '../../pages/edit-fundere/edit-fundere.component';
import {JobeComponent} from '../../pages/jobe/jobe.component';
import {AjoutJobeComponent} from '../../pages/ajout-jobe/ajout-jobe.component';
import {EditJobeComponent} from '../../pages/edit-jobe/edit-jobe.component';
import {ModalityComponent} from '../../pages/modality/modality.component';
import {AjoutModalityComponent} from '../../pages/ajout-modality/ajout-modality.component';
import {EditModalityComponent} from '../../pages/edit-modality/edit-modality.component';
import {FormationsComponent} from '../../pages/formations/formations.component';
import {DetailFormationComponent} from '../../pages/detail-formation/detail-formation.component';
import {AjoutFormationComponent} from '../../pages/ajout-formation/ajout-formation.component';
import {PanierComponent} from '../../pages/panier/panier.component';
import {AjoutPanierComponent} from '../../pages/ajout-panier/ajout-panier.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {SafePipe} from '../../pipes/safe.pipe';
import {EventsComponent} from '../../pages/events/events.component';
import {DetailEventComponent} from '../../pages/detail-event/detail-event.component';
import {AjoutEventComponent} from '../../pages/ajout-event/ajout-event.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {EditFormationComponent} from '../../pages/edit-formation/edit-formation.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FormationAssuranceComponent} from '../../pages/formation-assurance/formation-assurance.component';
import {FormationBanqueComponent} from '../../pages/formation-banque/formation-banque.component';
import {FormationImmobilierComponent} from '../../pages/formation-immobilier/formation-immobilier.component';
import {EditEventComponent} from '../../pages/edit-event/edit-event.component';
import {ContactNousComponent} from '../../pages/contact-nous/contact-nous.component';
import {FormationPresentielComponent} from '../../pages/formation-presentiel/formation-presentiel.component';
import {FormationEnlignesComponent} from '../../pages/formation-enlignes/formation-enlignes.component';
import {AProposComponent} from '../../pages/a-propos/a-propos.component';
import {ImageCropperModule} from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    DomaineComponent,
    AjoutDomaineComponent,
    EditUsersComponent,
    AjoutUserComponent,
    EditDomaineComponent,
    FundereComponent,
    AjoutFundereComponent,
    EditFundereComponent,
    JobeComponent,
    AjoutJobeComponent,
    EditJobeComponent,
    ModalityComponent,
    AjoutModalityComponent,
    EditModalityComponent,
    FormationsComponent,
    DetailFormationComponent,
    AjoutFormationComponent,
    PanierComponent,
    AjoutPanierComponent,
    SafePipe,
    EventsComponent,
    DetailEventComponent,
    AjoutEventComponent,
    EditFormationComponent,
    FormationAssuranceComponent,
    FormationBanqueComponent,
    FormationImmobilierComponent,
    EditEventComponent,
    ContactNousComponent,
    FormationPresentielComponent,
    FormationEnlignesComponent,
    AProposComponent,
  ]
})

export class AdminLayoutModule {}
