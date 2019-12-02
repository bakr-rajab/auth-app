import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  currentUserId;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('userId'));
      this.currentUserId = params.get('userId');
    });
  }

}
