import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list-detail-component',
  templateUrl: './to-do-list-detail-component.component.html',
  styleUrls: ['./to-do-list-detail-component.component.css']
})
export class ToDoListDetailComponentComponent implements OnInit {

  @Input() userSelectedInput;

  constructor() { }

  ngOnInit(): void {
  }

}
