import { Component } from '@angular/core';
// Importando o metodo Toast
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NovaConversaModalPage } from '../nova-conversa-modal/nova-conversa-modal.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Conversas";

  conversas = [
    {
      "contato": "",
      "imagem": ""
    }

  ];

  // Criando a chave primária
  conversas_key = 'conversas';

  nova_conversa = this.criar_nova_conversa();

  constructor(public toastController: ToastController, public alertController: AlertController, private storage: Storage, public modalController: ModalController) {

    {
      this.storage.get(this.conversas_key).then((data) => {
        if (data) {
          this.conversas = data;
        }
      })
    }
  }

  // Adicionando uma nova conversa
  async add(conversa) {
    this.conversas.push(this.nova_conversa);
    this.nova_conversa = this.criar_nova_conversa();

    //Chave primária
    this.storage.set('conversas_key', this.conversas);

    // Criando um Toast
    const toast = await this.toastController.create({
      message: 'Nova conversa cadastrada com sucesso!',
      duration: 3000,
      position: 'top',
      color: 'dark'
    });

    // Exibir a mensagem na tela
    toast.present();
  }

  criar_nova_conversa() {
    return {
      "contato": "",
      "imagem": ""
    }
  }

  // Criando o metodo para remover
  async remove(conversa) {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Conversa removida com sucesso ! ',
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
            // Atualizando o formulário na tela
            this.nova_conversa = conversa

            // Excluindo o item da listagem
            var i = this.conversas.indexOf(conversa);
            this.conversas.splice(i, 1);

            // Criando um Toast
            const toast = await this.toastController.create({
              message: 'Conversa removida com sucesso!',
              duration: 3000,
              position: 'top',
              color: 'dark'
            });

            // Exibindo a mensagem na tela 
            toast.present();
          }
        }
      ]
    });

    await alert.present();
  }

  async exibir_modal() {

    const modal = await this.modalController.create({
      component: NovaConversaModalPage
    });

    await modal.present();

    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data);
    });
  }

}
