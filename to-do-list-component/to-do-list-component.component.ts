import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {

  listItem = ['je', 'myself', 'I'];

  userSelected: string;
  constructor() { }

  ngOnInit(): void {
  }

  addTeParle(message: string): void{
    console.log(message);
    this.ajouterAlaToDoList(message);
  }

  ajouterAlaToDoList(item: string): void{ //fonction qui ajoute l'item à la to-do-list
    this.listItem.push(item);
  }

  supprimerValeurToDoList(indexOutput: number): void { // fonction qui supprime
    this.listItem.splice(indexOutput, 1);
  }

  handleSelectUser(indexValueToSelect): void { //fonction qui sélectionne et affiche détail
    this.userSelected = this.listItem[indexValueToSelect];
  }
}
