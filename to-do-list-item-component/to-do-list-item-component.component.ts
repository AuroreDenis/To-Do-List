import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-to-do-list-item-component',
  templateUrl: './to-do-list-item-component.component.html',
  styleUrls: ['./to-do-list-item-component.component.css']
})
export class ToDoListItemComponentComponent implements OnInit {
  @Input() itemUpdate: string;
  @Input() indexUser;
  @Output() supprimerValeuOutput = new EventEmitter<number>();
  @Output() selectUserOutput = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  supprimerItemToDoList(): void {
      this.supprimerValeuOutput.emit(this.indexUser);
  }

  handleSelectUser(): void {
    this.selectUserOutput.emit(this.indexUser);
  }
}
