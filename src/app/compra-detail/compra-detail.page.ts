import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-compra-detail',
  templateUrl: './compra-detail.page.html',
  styleUrls: ['./compra-detail.page.scss'],
})
export class CompraDetailPage implements OnInit {

  task;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.route.snapshot.paramMap.get('task');
  }

}
