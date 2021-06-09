import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/providers/services/mock-api/mock.service';


@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  constructor(private mock: MockService) { }

  ngOnInit(): void {
    
  }


}
