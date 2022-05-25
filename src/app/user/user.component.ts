import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: ''
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
  onParentSubmit(formData:any){
    console.log(formData);
        // Tìm id lớn nhất 
        const userIds = this.users
        .map(user => user.id)
        .sort((a, b) => a - b);
      console.log(userIds);
      const newId = userIds[userIds.length - 1];
  
      if (this.formValues.id == 0) {
        // Thêm dữ liệu vào bảng
        this.users.push({
          ...formData,
          id: newId + 1
        });
      } else {
        const index = this.users.findIndex(user => user.id === this.formValues.id)
        // console.log(index);
        if (index > -1) {
          this.users[index] = {
            ...formData,
            id: this.formValues.id
          }
        } 
      }
  }
  onParentDelete(userId: number) {
    this.users = this.users.filter(user => user.id !== userId)
  }
  onParentEdit(userId: number) {
    const userEdit = this.users.find(user => user.id === userId);
    if (userEdit) {
      return this.formValues = {...userEdit}
    }
    return alert('Không tìm thấy user muốn chỉnh sửa')
  }
}
