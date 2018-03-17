import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./pages/product/product.component";
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { TableComponent } from './pages/table/table.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: '',      component: ProductComponent },
  { path: 'chat',  component: ChatDialogComponent, },
  { path: 'table', component: TableComponent, },
  { path: 'login', component: LoginComponent, },
  { path: '**',    redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
