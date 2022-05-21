import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'John12',
      age: 23,
      email: 'john@example.com'
    },
    {
      id: 13,
      name: 'Dung05',
      age: 20,
      email: 'dung@example.com'
    },
    {
      id: 2,
      name: 'Binh06',
      age: 20,
      email: 'binh@example.com'
    }
  ]
  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
  }
  onSubmit(userForm: NgForm) {
    // Tìm id lớn nhất 
    const userIds = this.users
      .map(user => user.id)
      .sort((a, b) => a - b);
    console.log(userIds);
    const newId = userIds[userIds.length - 1];

    if (this.inputValues.id == 0) {
      // Thêm dữ liệu vào bảng
      this.users.push({
        ...userForm.value,
        id: newId + 1
      });
    } else {
      const index = this.users.findIndex(user => user.id === this.inputValues.id)
      // console.log(index);
      if (index > -1) {
        this.users[index] = {
          ...userForm.value,
          id: this.inputValues.id
        }
      } 
    }
    //Reset giá trị ban đầu
    userForm.resetForm({
      id: 0,
      name: '',
      age: 0,
      email: ''
    })
  }
  Edit(id: number) {
    console.log(id);
    const userById = this.users.find(user => user.id === id)
    console.log(userById);
    if (userById) {
      this.inputValues = {...userById}
    }
  }
  Delete(id: number) {
    console.log(id);
    this.users = this.users
      .filter(user => user.id !== id)
  }
}
