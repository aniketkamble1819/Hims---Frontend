import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { GendersComponent } from './genders/genders.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { StatesComponent } from './states/states.component';
import { TalukasComponent } from './talukas/talukas.component';
import { DistrictsComponent } from './districts/districts.component';
import { TitlesComponent } from './titles/titles.component';
import { UsersComponent } from './users/users.component';
import { NationalitiesComponent } from './nationalities/nationalities.component';
import { OpdservicesComponent } from './opdservices/opdservices.component';
import { DoctorcatrgorywiseopdserviceratesComponent } from './doctorcatrgorywiseopdservicerates/doctorcatrgorywiseopdservicerates.component';



@NgModule({
  declarations: [
    LandingComponent,
    GendersComponent,
    StatesComponent,
    TalukasComponent,
    DistrictsComponent,
    TitlesComponent,
    UsersComponent,
    NationalitiesComponent,
    OpdservicesComponent,
    DoctorcatrgorywiseopdserviceratesComponent,
    
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
