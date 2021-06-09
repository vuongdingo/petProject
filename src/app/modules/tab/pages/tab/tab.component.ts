import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeInterval, timestamp } from 'rxjs/operators';
import { from,interval, timer  } from 'rxjs';
import { take } from "rxjs/operators"
import { ShareCountService } from 'src/app/services/share-count.service';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['tab.component.scss']
})
export class TabComponent implements OnInit {

  public message: any;
  public data = from([1, 2, 3, 4, 5]);
  public time  = timer(1000);
  public count = 0;
  constructor(
    private http: HttpClient,
    private shareCount: ShareCountService
  ) { }

  ngOnInit() {
    //const subscription = interval(500).pipe(take(20)).subscribe(console.log);

  }
  async onClick(): Promise<void> {
    this.message = this.count++;
    var audio = new Audio("http://api.microsofttranslator.com/V2/http.svc/Speak?oncomplete=Speech.onSpeechComplete&appId=3AFAC12D1A7C674242EE37C45BD5E3293DDF4A74&language=" + 'vi'+ "&text=" + 'hello');
	  audio.play();
  }
}
