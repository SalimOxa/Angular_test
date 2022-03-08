import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/quisommenous/icons.component';
import { MapsComponent } from '../../pages/parole_d\'expert/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {DomaineComponent} from '../../pages/domaine/domaine.component';
import {EditUsersComponent} from '../../pages/edit-users/edit-users.component';
import {AdminGuard} from '../../_helpers/admin.guard';
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
import {EventsComponent} from '../../pages/events/events.component';
import {DetailEventComponent} from '../../pages/detail-event/detail-event.component';
import {AjoutEventComponent} from '../../pages/ajout-event/ajout-event.component';
import {EditFormationComponent} from '../../pages/edit-formation/edit-formation.component';
import {FormationAssuranceComponent} from '../../pages/formation-assurance/formation-assurance.component';
import {FormationImmobilierComponent} from '../../pages/formation-immobilier/formation-immobilier.component';
import {FormationBanqueComponent} from '../../pages/formation-banque/formation-banque.component';
import {EditEventComponent} from '../../pages/edit-event/edit-event.component';
import {ContactNousComponent} from '../../pages/contact-nous/contact-nous.component';
import {FormationPresentielComponent} from '../../pages/formation-presentiel/formation-presentiel.component';
import {FormationEnlignesComponent} from '../../pages/formation-enlignes/formation-enlignes.component';
import {AProposComponent} from '../../pages/a-propos/a-propos.component';

// @ts-ignore
export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent},
    { path: 'user-profile',   component: UserProfileComponent, canActivate: [AdminGuard] },
    { path: 'tables',  component: TablesComponent, canActivate: [AdminGuard] },
    { path: 'quisommenous',          component: IconsComponent, canActivate: [AdminGuard] },
    { path: 'parole_expert',           component: MapsComponent, canActivate: [AdminGuard] },
    { path: 'domaine',           component: DomaineComponent, canActivate: [AdminGuard] },
    { path: 'edit-users/:id',           component: EditUsersComponent, canActivate: [AdminGuard] },
    { path: 'ajout-users',           component: AjoutUserComponent, canActivate: [AdminGuard] },
    { path: 'ajout-domaine',           component: AjoutDomaineComponent, canActivate: [AdminGuard] },
    { path: 'edit-domaine/:id',           component: EditDomaineComponent, canActivate: [AdminGuard] },
    { path: 'fundere',           component: FundereComponent, canActivate: [AdminGuard] },
    { path: 'ajout-fundere',           component: AjoutFundereComponent, canActivate: [AdminGuard] },
    { path: 'edit-fundere/:id',           component: EditFundereComponent, canActivate: [AdminGuard] },
  { path: 'edit-event/:id',           component: EditEventComponent, canActivate: [AdminGuard] },
  { path: 'jobs',           component: JobeComponent, canActivate: [AdminGuard] },
    { path: 'ajout-job',           component: AjoutJobeComponent, canActivate: [AdminGuard] },
    { path: 'edit-job/:id',           component: EditJobeComponent, canActivate: [AdminGuard] },
    { path: 'modality',           component: ModalityComponent, canActivate: [AdminGuard] },
    { path: 'ajout-modality',           component: AjoutModalityComponent, canActivate: [AdminGuard] },
    { path: 'edit-modality/:id',           component: EditModalityComponent, canActivate: [AdminGuard] },
    { path: 'formation',           component: FormationsComponent },
    { path: 'detail-formation/:id',           component: DetailFormationComponent},
    { path: 'ajout-formation',           component: AjoutFormationComponent, canActivate: [AdminGuard] },
    { path: 'panier',           component: PanierComponent, canActivate: [AdminGuard] },
    { path: 'ajout-panier',           component: AjoutPanierComponent, canActivate: [AdminGuard] },
    { path: 'events',           component: EventsComponent },
    { path: 'detail-event/:id',           component: DetailEventComponent},
    { path: 'ajout-event',           component: AjoutEventComponent, canActivate: [AdminGuard] },
    { path: 'edit-formation/:id',           component: EditFormationComponent, canActivate: [AdminGuard] },
    { path: 'assurance-formation',           component: FormationAssuranceComponent},
    { path: 'immobilier-formation',           component: FormationImmobilierComponent },
    { path: 'banque-formation',           component: FormationBanqueComponent },
    { path: 'contact-nous',           component: ContactNousComponent },
  { path: 'formation-enligne',           component: FormationEnlignesComponent },
  { path: 'formation-presentiel',           component: FormationPresentielComponent },
  { path: 'A-Propos',           component: AProposComponent },







];
