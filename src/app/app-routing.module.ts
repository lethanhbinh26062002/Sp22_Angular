import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  // 1. Nếu có children thì ko sử dụng component để render
  // 2. Nếu vẫn muốn sd component(khung layout) thì trong component thì phải sd <router-outlet></router-outlet>
  {
    path: 'users',
    component: UserComponent,
    children:[
      {
        path: 'create',
        component:UserFormComponent
      },
      {
        path: 'list',
        component:UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
