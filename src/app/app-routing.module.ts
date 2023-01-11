import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { AreasComponent } from './components/areas/areas.component';
import { MainComponent } from './components/main/main.component';
import { MainareasComponent } from './components/mainareas/mainareas.component';
import { MainrolesComponent } from './components/mainroles/mainroles.component';
import { FormrolesComponent } from './components/mainroles/formroles/formroles.component';

const routes: Routes = [
  {
    path: 'index',
    component: MainComponent
  },
  {
    path: 'users', 
    component: UsersComponent
  },
  {
    path: 'areas',
    component: MainareasComponent
  },
  {
    path: 'areasForm',
    component: AreasComponent
  },
  {
    path: 'roles',
    component: MainrolesComponent
  },
  {
    path: 'rolesForm',
    component: FormrolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
