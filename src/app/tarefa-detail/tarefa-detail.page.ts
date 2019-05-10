import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';

@Component({
  selector: 'app-tarefa-detail',
  templateUrl: './tarefa-detail.page.html',
  styleUrls: ['./tarefa-detail.page.scss'],
})
export class TarefaDetailPage implements OnInit {

  //Declarando o metodo
  task;

  constructor(public route: ActivatedRoute) { }
  
  ngOnInit() {
    this.task = this.route.snapshot.paramMap.get('task');
  }

}
