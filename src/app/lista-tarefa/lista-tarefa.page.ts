import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovaTarefaModalPage } from '../nova-tarefa-modal/nova-tarefa-modal.page';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})

export class ListaTarefaPage {
  title = "Lista | Tarefas";
  tarefas = [];
  tartefas_key = 'tarefas';

  // #2 - Derclarar uma instância no construtor
  constructor(public toastController: ToastController, public alertController: AlertController, private storage: Storage, public modalController: ModalController) {
    {
      this.storage.get(this.tartefas_key).then((data) => {
        if (data) {
          this.tarefas = data;
        }
      });
    }
  }

  async add(tarefa) {
    this.tarefas.push(tarefa);
    this.storage.set('TAREFAS_KEY', this.tarefas);


    // #3 - Criando um Toast
    const toast = await this.toastController.create({
      message: 'Nova tarefa cadastrada com sucesso!',
      duration: 5000,
      position: 'top',
      color: 'dark'
    });

    // #4 Exibir a mensagem na tela
    toast.present();
  }

  async remove(tarefa) {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Tarefa removida com sucesso!!!',
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

            // Remover o item selecionado da lista
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);
            this.storage.set('tartefas_key', this.tarefas);

            // #3 - Criando um Toast
            const toast = await this.toastController.create({
              message: 'Tarefa removida com sucesso!',
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

  edit(tarefa) {
    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);

  }


  async exibir_modal() {

    const modal = await this.modalController.create({
      component: NovaTarefaModalPage
    });

    await modal.present();

    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });
  }
}
