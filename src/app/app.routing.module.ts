import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from "./pages/product/product.component";
import { LoginComponent } from "./pages/login/login.component";
import { ChatDialogComponent } from './chat/chat-dialog/chat-dialog.component';
import { TableComponent } from './pages/table/table.component';


const routes: Routes = [
  { path: '',      component: ProductComponent },
  { path: 'login', component: LoginComponent, },
  { path: 'chat',  component: ChatDialogComponent, },
  { path: 'table',  component: TableComponent, },
  { path: '**',    redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
