import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovaCompraModalPage } from '../nova-compra-modal/nova-compra-modal.page';


@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage  {

  title = "Lista | Compras";
  compras = [];
  compras_key = 'compras';

  // #2 - Derclarar uma instância no construtor
  constructor(public toastController: ToastController, public alertController: AlertController,  private storage: Storage, public modalController: ModalController) {
    {
      this.storage.get(this.compras_key).then((data) => {
        if (data) {
          this.compras = data;
        }
      })
    }
  }

  async add(tarefa) {
    this.compras.push(tarefa);
    this.storage.set('TAREFAS_KEY', this.compras);

    // #3 - Criando um Toast
    const toast = await this.toastController.create({
      message: 'Novo produto cadastrado com sucesso!',
      duration: 3000,
      position: 'top',
      color: 'dark'
    });

    // #4 Exibir a mensagem na tela
    toast.present();
  }

  async remove(compra) {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Produto removido com sucesso!!!',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: async () => {
            // Atualizar formulário

            // Remover o item selecionado da lista
            var i = this.compras.indexOf(compra);
            this.compras.splice(i, 1);
            this.storage.set('compras_key', this.compras);

            // #3 - Criando um Toast
            const toast = await this.toastController.create({
              message: 'Produto removido com sucesso!',
              duration: 3000,
              position: 'top',
              color: 'dark'
            });

            // #4 Exibir a mensagem na tela
            toast.present();
          }
        }
      ]
    });

    await alert.present();

  }

  edit(compra) {
    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);

  }

  async exibir_modal() {

    const modal = await this.modalController.create({
      component: NovaCompraModalPage
    });

    await modal.present();

    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });
  }
}
