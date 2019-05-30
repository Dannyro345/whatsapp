import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-nova-conversa-modal',
  templateUrl: './nova-conversa-modal.page.html',
  styleUrls: ['./nova-conversa-modal.page.scss'],
})
export class NovaConversaModalPage implements OnInit {

nova_conversa = {

  "contato": "",
  "imagem": ""
}


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  add(){ 
      
    this.modalController.dismiss(this.nova_conversa);

  }

}
