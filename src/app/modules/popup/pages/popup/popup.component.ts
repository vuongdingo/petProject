import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, timer  } from 'rxjs';
import { ShareCountService } from 'src/app/services/share-count.service';

declare var jQuery: any;

@Component({
  selector: 'app-popup',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.scss']
})

export class PopupComponent implements OnInit {
  public message: any;
  public data = from([1, 2, 3, 4, 5]);
  public time  = timer(1000);
  public count = 0;

  public shareCount: any;

  constructor(
    private http: HttpClient,
    private share: ShareCountService
    ) {}

  async onClick(): Promise<void> {
    this.message = this.count++;
  }

  ngOnInit(){
  }
}
