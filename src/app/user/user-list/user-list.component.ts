import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //Dữ liệu nhận đc từ conponent user
  @Input() users:any;
  @Output() handleDelete: EventEmitter<number>
  @Output() handleEdit: EventEmitter<number>;
  constructor() { 
    this.handleDelete = new EventEmitter();
    this.handleEdit = new EventEmitter();
  }

  ngOnInit(): void {
  }

  Delete(userId: number){
    this.handleDelete.emit(userId);
  }
  Edit(userId: number){
    this.handleEdit.emit(userId)
  }
}
