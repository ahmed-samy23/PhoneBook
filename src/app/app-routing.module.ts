import { NotfoundComponent } from './components/notfound/notfound.component';
import { UpdatecontactComponent } from './components/updatecontact/updatecontact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletecontactComponent } from './components/deletecontact/deletecontact.component';


const routes: Routes = [
  {path: '' , component : HomeComponent},
  { path: 'home' , component:  HomeComponent},
  { path: '**' , component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
