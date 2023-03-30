import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { DistrictsComponent } from './districts/districts.component';
import { DoctorcatrgorywiseopdserviceratesComponent } from './doctorcatrgorywiseopdservicerates/doctorcatrgorywiseopdservicerates.component';
import { GendersComponent } from './genders/genders.component';
import { LandingComponent } from './landing.component';
import { NationalitiesComponent } from './nationalities/nationalities.component';
import { OpdservicesComponent } from './opdservices/opdservices.component';
import { StatesComponent } from './states/states.component';
import { TalukasComponent } from './talukas/talukas.component';
import { TitlesComponent } from './titles/titles.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:LandingComponent, children:[
    // {path:'', component:GendersComponent},
    {path:'genders', component:GendersComponent},
    {path:'states', component:StatesComponent},
    {path:'districts/:stateid', component:DistrictsComponent},
    {path:'talukas/:districtid', component:TalukasComponent},
    {path:'titles', component:TitlesComponent},
    {path:'users', component:UsersComponent},
    {path:"nationalities", component:NationalitiesComponent},
     {path:"opdservices", component:OpdservicesComponent},
     {path:"opdservicesdoctor", component:DoctorcatrgorywiseopdserviceratesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)
],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
