import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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


  add() {
    this.tarefas.push(this.nova_tarefa);
    this.nova_tarefa = this.criar_nova_tarefa();
  }

  criar_nova_tarefa() {
    return {
      "descricao": "",
      "horario": ""

    }
  }

}
