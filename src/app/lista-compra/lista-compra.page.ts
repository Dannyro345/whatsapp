import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
})
export class ListaCompraPage  {

  title = "Lista | Compras";
  compras = [
    {
      "descricao": "Vestido",
      "valor": "100,00"
    },
    {
      "descricao": "Blusa",
      "valor": "40,00"
    },
    
  ];

  nova_compra = this.criar_nova_compra();

  // #2 - Derclarar uma instância no construtor
  constructor(public toastController: ToastController, public alertController: AlertController) {

  }

  async add() {
    this.compras.push(this.nova_compra);
    this.nova_compra = this.criar_nova_compra();

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

  criar_nova_compra() {
    return {
      "descricao": "",
      "valor": ""

    }
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
            this.nova_compra = compra

            // Remover o item selecionado da lista
            var i = this.compras.indexOf(compra);
            this.compras.splice(i, 1);

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
    this.nova_compra = compra

    var i = this.compras.indexOf(compra);
    this.compras.splice(i, 1);

  }
}
