import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list-add-item-component',
  templateUrl: './to-do-list-add-item-component.component.html',
  styleUrls: ['./to-do-list-add-item-component.component.css']
})
export class ToDoListAddItemComponentComponent implements OnInit {

  @Output() eventAddBouton = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  ajouterDepuisAdd() {
    console.log('ça fonctionne');
    this.eventAddBouton.emit('Add parle à la to do list');
  }
}
