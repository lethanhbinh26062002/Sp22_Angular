import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues:{
    id: number,
    name: string,
    age: number,
    email: string
  };
  //1. Định nghĩa sự kiện gửi dữ liệu từ con lên cha
  @Output() handleSubmit: EventEmitter<any>
  constructor() { 
    //2. Khai báo giá trị default ccho sự kiện
    this.handleSubmit = new EventEmitter();
    this.inputValues = {
      id: 0,
      name: '',
      age: 0,
      email: ''
    }
  }

  ngOnInit(): void {
  }

  onSubmit(userForm: NgForm) {
    // 3. Gửi dữ liệu đi khi ấn submitForm
    this.handleSubmit.emit(userForm.value);
    // 4. Reset giá trị ban đầu cho form
    
    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: ''
    })
  }
}
