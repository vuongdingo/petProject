import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, timer, interval } from 'rxjs';
import { take } from "rxjs/operators"

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-options',
  templateUrl: 'options.component.html',
  styleUrls: ['options.component.scss']
})
export class OptionsComponent implements OnInit {

  public isOpenSetting = false;

  public message: any;

  public time = timer(1000);

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {

  }

  onClick() {
    console.log('click http get');
    this.count++;

    //this.http.get('https://60bb6f3a42e1d00017620af6.mockapi.io/user').subscribe(console.log);


  }

  onSetting() {
    this.isOpenSetting = !this.isOpenSetting;
  }

  ngOnInit() {
    const subscription = interval(500).pipe(take(4)).subscribe(
      val => this.http.get('https://60bb6f3a42e1d00017620af6.mockapi.io/user').subscribe(console.log)
    );
  }
  
  public count = 1;

}
