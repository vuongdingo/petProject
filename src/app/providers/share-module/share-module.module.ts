import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TaskDetailsComponent } from './component/task-details/task-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import { CreateProjectPopupComponent } from './component/create-project-popup/create-project-popup.component';
import { CreateLabelPopupComponent } from './component/create-label-popup/create-label-popup.component';
import { CreateNewTaskComponent } from './component/create-new-task/create-new-task.component';
import { SettingComponent } from './component/setting/setting.component';
import { StatsComponent } from './component/stats/stats.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DatePickerPopupComponent } from './component/create-new-task/date-picker-popup/date-picker-popup.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    TaskDetailsComponent,
    CreateProjectPopupComponent,
    CreateLabelPopupComponent,
    CreateNewTaskComponent,
    SettingComponent,
    StatsComponent,
    DatePickerPopupComponent
  ],
  imports: [
    MatCommonModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule
  ],
  exports: [
    CommonModule, 
    HeaderComponent, 
    LoginComponent, 
    TaskDetailsComponent, 
    CreateNewTaskComponent
  ]
})
export class ShareModuleModule { }
