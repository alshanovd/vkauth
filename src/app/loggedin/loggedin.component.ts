import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {
  payload = {}

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const payload = this.activatedRoute.snapshot.queryParams['payload'];
    console.log(this.activatedRoute.snapshot.queryParams['payload']);
    this.payload = JSON.parse(payload); 
    console.log(this.payload);
  }


}
