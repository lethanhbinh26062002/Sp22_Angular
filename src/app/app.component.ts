import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_SP22';
  name = 'Binhltph16803';
  id = 'PH16803';
  teachers = [
    {
      id: 1,
      name: "John",
      age: 30,
      gender: 0,
      avatar: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
      status:0
    },
    {
      id: 2,
      name: "John",
      age: 35,
      gender: 1,
      avatar: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
      status:1
    },
    {
      id: 3,
      name: "Binh",
      age: 32,
      gender: 1,
      avatar: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
      status:1
    },
    {
      id: 4,
      name: "Dung",
      age: 26,
      gender: 1,
      avatar: "https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/3-8.png",
      status:0
    }
  ]
  // Định nghĩa hàm
  schoolName = "";
  clickH1(){
    console.log("Đã click");
    this.schoolName = 'Poly';
  }
  status = true;
  changeStatus(){
    this.status = !this.status
  }
  valueInput = '';
  changeInput(event: any){
    this.valueInput = event.target.value
  }
}
