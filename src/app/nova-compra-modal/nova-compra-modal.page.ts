import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-nova-compra-modal',
  templateUrl: './nova-compra-modal.page.html',
  styleUrls: ['./nova-compra-modal.page.scss'],
})
export class NovaCompraModalPage implements OnInit {
  nova_compra = {
    'descricao': '',
    'valor': ''
  }

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  add() {
    this.modalController.dismiss(this.nova_compra);
  }

}
