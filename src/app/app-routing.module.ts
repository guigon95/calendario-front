import { NgModule } from '@angular/core';
import { HomeComponent } from './components/views/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { PessoaCreateComponent } from './components/views/pesssoa/pessoa-create/pessoa-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'pessoas',
    component: PessoaReadComponent
  },
  {
    path: 'pessoas/create',
    component: PessoaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
