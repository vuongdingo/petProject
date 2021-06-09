import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './pages/options/options.component';
import { SettingsComponent } from './pages/options/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OptionsComponent
  },
  {
    path: 'settings',
    pathMatch: 'full',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule {}
