import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-mod5detail',
  imports: [],
  templateUrl: './mod5detail.html',
  styleUrl: './mod5detail.css',
})
export class Mod5detail {

  constructor(private route : ActivatedRoute) {
    // const id = this.route.snapshot.params['id'];
    const id = this.route.snapshot.paramMap.get('id');
    const message = this.route.snapshot.queryParamMap.get('message');
    console.log(message);
    console.log(id);
  }

}
