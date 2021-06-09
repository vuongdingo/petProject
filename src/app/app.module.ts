import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShareCountService } from './services/share-count.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskDetailSideNaveServiceService } from './providers/services/task-details-side-nave-service.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ShareCountService, TaskDetailSideNaveServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
