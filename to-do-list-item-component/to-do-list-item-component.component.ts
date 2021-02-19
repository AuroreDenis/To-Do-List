import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-to-do-list-item-component',
  templateUrl: './to-do-list-item-component.component.html',
  styleUrls: ['./to-do-list-item-component.component.css']
})
export class ToDoListItemComponentComponent implements OnInit {
  @Input() itemUpdate: string;
  constructor() { }

  ngOnInit(): void {
  }

}
