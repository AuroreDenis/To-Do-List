import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-list-add-item-component',
  templateUrl: './to-do-list-add-item-component.component.html',
  styleUrls: ['./to-do-list-add-item-component.component.css']
})
export class ToDoListAddItemComponentComponent implements OnInit {

  @Output() eventAddBouton = new EventEmitter<string>();
  OnRecupere: string;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typed typedef
  ajouterDepuisAdd() {
    this.eventAddBouton.emit(this.OnRecupere); //on récupère le texte entré dans le Input et on l'envoie au parent
  }
}
