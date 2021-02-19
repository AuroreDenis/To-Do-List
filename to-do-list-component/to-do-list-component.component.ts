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

}
