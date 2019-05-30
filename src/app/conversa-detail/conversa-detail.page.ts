import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-conversa-detail',
  templateUrl: './conversa-detail.page.html',
  styleUrls: ['./conversa-detail.page.scss'],
})
export class ConversaDetailPage implements OnInit {

  task;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {

    this.task = this.route.snapshot.paramMap.get('task');
    
  }

}
