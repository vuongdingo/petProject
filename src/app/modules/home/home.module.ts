import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HomesComponent } from './homes/homes.component';
import { ProjectRegionComponent } from './project-region/project-region.component';
import { DateComponent } from './project-region/date/date.component';
import { ListComponent } from './project-region/list/list.component';
import { TaskRegionComponent } from './task-region/task-region.component';
import { ShareModuleModule } from 'src/app/providers/share-module/share-module.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    HomeComponent,
    HomesComponent,
    ProjectRegionComponent,
    DateComponent,
    ListComponent,
    TaskRegionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ShareModuleModule,
    MatDatepickerModule,
    MatInputModule,
    MatSidenavModule
  ]
})
export class HomeModule { }
