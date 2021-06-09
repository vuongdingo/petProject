import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OptionsRoutingModule } from './options-routing.module';
import { OptionsComponent } from './pages/options/options.component';
import { ChildComponent } from './pages/options/child/child.component';
import { SettingsComponent } from './pages/options/settings/settings.component';

@NgModule({
  declarations: [OptionsComponent, ChildComponent, SettingsComponent],
  imports: [CommonModule, OptionsRoutingModule]
})
export class OptionsModule {
  
}
