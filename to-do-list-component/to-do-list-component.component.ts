import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css']
})
export class ToDoListComponentComponent implements OnInit {

  listItem = ['je', 'myself', 'I'];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  addTeParle(message: string){
    console.log(message);
    this.ajouterAlaToDoList(message);

  }

  // tslint:disable-next-line:typedef
  ajouterAlaToDoList(item: string){ //fonction qui ajoute l'item à la to-do-list
    this.listItem.push(item);
  }
}
