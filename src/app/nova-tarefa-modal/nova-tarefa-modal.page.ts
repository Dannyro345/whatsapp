import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-nova-tarefa-modal',
  templateUrl: './nova-tarefa-modal.page.html',
  styleUrls: ['./nova-tarefa-modal.page.scss'],
})
export class NovaTarefaModalPage implements OnInit {

  nova_tarefa = {
    'descricao' : '',
    'horario': ''
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  add(){
    this.modalController.dismiss(this.nova_tarefa);
  }

}
