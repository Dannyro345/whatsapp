import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.page.html',
  styleUrls: ['./lista-tarefa.page.scss'],
})
export class ListaTarefaPage {
  title = "Lista | Tarefas";
  tarefas = [
    {
      "descricao": "Ir para o IFPI",
      "horario": "18:00"
    },

    {
      "descricao": "Dormir",
      "horario": "05:00"
    },

    {
      "descricao": "Comer",
      "horario": "12:00"
    },

  ];


  nova_tarefa = this.criar_nova_tarefa();

  // #2 - Derclarar uma instância no construtor
  constructor(public toastController: ToastController, public alertController: AlertController) {

  }

  async add() {
    this.tarefas.push(this.nova_tarefa);
    this.nova_tarefa = this.criar_nova_tarefa();

    // #3 - Criando um Toast
    const toast = await this.toastController.create({
      message: 'Nova tarefa cadastrada com sucesso!',
      duration: 3000,
      position: 'top',
      color: 'dark'
    });

    // #4 Exibir a mensagem na tela
    toast.present();
  }

  criar_nova_tarefa() {
    return {
      "descricao": "",
      "horario": ""

    }
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
            // Atualizar formulário
            this.nova_tarefa = tarefa

            // Remover o item selecionado da lista
            var i = this.tarefas.indexOf(tarefa);
            this.tarefas.splice(i, 1);

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
    this.nova_tarefa = tarefa

    var i = this.tarefas.indexOf(tarefa);
    this.tarefas.splice(i, 1);

  }
}