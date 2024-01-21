import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss'],
})
export class LoggedinComponent implements OnInit {
  payload: Params | string = {};
  avatar = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const payload = this.activatedRoute.snapshot.queryParams['payload'];
    // console.log(this.activatedRoute.snapshot.queryParams['payload']);
    if (payload) { // vk oauth
      this.payload = JSON.parse(payload);
      this.avatar = (this.payload as Params)['user'].avatar;
    }
    // console.log(this.payload);

    const hash = this.activatedRoute.snapshot.fragment;
    if (hash) {
      // console.log(hash);
      this.payload = hash;
    }
  }
}
